import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const PremiumDatePicker = ({ 
  value, 
  onChange, 
  placeholder = "Select date",
  label,
  icon: Icon = Calendar 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value || '');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const containerRef = useRef(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()].slice(0, 3);
    return `${day} ${month}`;
  };

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const today = new Date();
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const isCurrentMonth = date.getMonth() === month;
      const isToday = date.toDateString() === today.toDateString();
      const isSelected = selectedDate && date.toISOString().split('T')[0] === selectedDate;
      const isPast = date < today && !isToday;
      
      days.push({
        date,
        day: date.getDate(),
        isCurrentMonth,
        isToday,
        isSelected,
        isPast,
        dateString: date.toISOString().split('T')[0]
      });
    }
    
    return days;
  };

  const handleDateSelect = (dateString) => {
    setSelectedDate(dateString);
    onChange(dateString);
    setIsOpen(false);
  };

  const navigateMonth = (direction) => {
    setCurrentMonth(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const calendarDays = generateCalendarDays();

  return (
    <div className="relative" ref={containerRef}>
      <motion.div 
        className="flex gap-2 sm:gap-3 items-center group cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon className="text-brand-green group-hover:text-brand-yellow transition-colors duration-300 flex-shrink-0" size={16} />
        <div className="w-full min-w-0">
          <p className="text-xs font-semibold text-gray-600 mb-1 text-left">{label}</p>
          <div className="w-full bg-transparent outline-none text-xs sm:text-sm font-medium text-left cursor-pointer">
            {selectedDate ? formatDate(selectedDate) : (
              <span className="text-gray-400">{placeholder}</span>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 z-50 min-w-[280px]"
          >
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigateMonth(-1)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ChevronLeft size={16} />
              </motion.button>
              
              <h3 className="font-semibold text-gray-800">
                {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h3>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigateMonth(1)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ChevronRight size={16} />
              </motion.button>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <div key={day} className="text-xs font-medium text-gray-500 text-center py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => (
                <motion.button
                  key={index}
                  whileHover={day.isCurrentMonth && !day.isPast ? { scale: 1.1 } : {}}
                  whileTap={day.isCurrentMonth && !day.isPast ? { scale: 0.9 } : {}}
                  onClick={() => day.isCurrentMonth && !day.isPast && handleDateSelect(day.dateString)}
                  disabled={!day.isCurrentMonth || day.isPast}
                  className={`
                    w-8 h-8 text-xs rounded-full transition-all duration-200
                    ${day.isCurrentMonth 
                      ? day.isPast 
                        ? 'text-gray-300 cursor-not-allowed'
                        : day.isSelected
                          ? 'bg-brand-green text-white'
                          : day.isToday
                            ? 'bg-brand-yellow text-black font-semibold'
                            : 'text-gray-700 hover:bg-brand-green/10'
                      : 'text-gray-300'
                    }
                  `}
                >
                  {day.day}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PremiumDatePicker;
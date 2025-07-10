import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link as RouterLink, MemoryRouter } from 'react-router';

const breadcrumbNameMap = {
  '/html/bases': 'HTML Bases',
  '/html/document-structure': 'Document Structure',
  '/html/text-content': 'Text Content',
  '/html/hyperlinks': 'Hyperlinks',
  '/html/images-media': 'Images-Media',
  '/backend/programming-fundamentals': 'Programming Fundamentals',
  '/backend/core-backend-concepts': 'Core Backend Concepts',
  '/backend/databases': 'Databases',
  '/backend/api-design': 'API Design',
  '/backend/auth': 'Authentication & Authorization',
  '/backend/frameworks': 'Languages & Frameworks',
  '/backend/data-validation': 'Data Validation',
  '/backend/error-handling': 'Error Handling',
};

// Дочерние элементы для каждого родительского пункта
const childItemsMap = {
  '/html': [
    { url: '/html/bases', title: 'HTML Bases' }
  ],
  '/backend': [
    { url: '/backend/programming-fundamentals', title: 'Programming Fundamentals' },
    { url: '/backend/core-backend-concepts', title: 'Core Backend Concepts' },
    { url: '/backend/databases', title: 'Databases' },
    { url: '/backend/api-design', title: 'API Design' },
    { url: '/backend/auth', title: 'Authentication' },
    { url: '/backend/frameworks', title: 'Frameworks' }
  ]
};

function ListItemLink({ to, open, onClick, primary }) {
  return (
    <li>
      <ListItemButton component={RouterLink} to={to} onClick={onClick}>
        <ListItemText primary={primary} />
        {open !== undefined && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.string
};

export default function NavigationMenu() {
  const [parentItems, setParentItems] = useState([]);
  const [openStates, setOpenStates] = useState({});

  // Загрузка родительских пунктов
  useEffect(() => {
    async function loadParentItems() {
      try {
        const response = await fetch('http://localhost:5167/api/menuItems/getParentMenuItems');
        const data = await response.json();
        
        // Инициализация состояний открытия
        const initialOpenStates = {};
        data.forEach(item => {
          initialOpenStates[item.url] = false;
        });
        
        setParentItems(data);
        setOpenStates(initialOpenStates);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
      }
    }
    
    loadParentItems();
  }, []);

  // Обработчик клика
  const handleItemClick = (url) => {
    setOpenStates(prev => ({
      ...prev,
      [url]: !prev[url]
    }));
  };

  // Объединение breadcrumbNameMap с загруженными данными
  const allBreadcrumbs = {
    ...breadcrumbNameMap,
    ...parentItems.reduce((acc, item) => {
      acc[item.url] = item.title;
      return acc;
    }, {})
  };

  return (
    <MemoryRouter>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        width: '100%',
        borderRight: '1px solid',
        height: '100%',
        borderColor: 'divider'
      }}>
        <Box component="nav" aria-label="mailbox folders">
          <List sx={{ padding: 0, margin: 0 }}>
            {parentItems.map(item => (
              <React.Fragment key={item.url}>
                <ListItemLink 
                  to={item.url}
                  open={openStates[item.url]}
                  onClick={() => handleItemClick(item.url)}
                  primary={allBreadcrumbs[item.url] || item.url}
                />
                
                {childItemsMap[item.url] && (
                  <Collapse in={openStates[item.url]} timeout="auto" unmountOnExit>
                    <List disablePadding sx={{ pl: 2 }}>
                      {childItemsMap[item.url].map(child => (
                        <ListItemLink
                          key={child.url}
                          to={child.url}
                          primary={allBreadcrumbs[child.url] || child.title}
                        />
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Box>
    </MemoryRouter>
  );
}
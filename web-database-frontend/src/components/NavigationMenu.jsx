import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Link as RouterLink,
  MemoryRouter,
} from 'react-router';

import { useState, useEffect } from 'react';

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

export default function NavigationMenu() {
  const [breadcrumbs, setBreadcrumbs] = useState({});
  const [htmlOpen, setHtmlOpen] = React.useState(false);
  const [cssOpen, setCssOpen] = React.useState(false);
  const [javaScriptOpen, setJavaScriptOpen] = React.useState(false);
  const [typeScriptOpen, setTypeScriptOpen] = React.useState(false);
  const [databasesOpen, setDatabasesOpen] = React.useState(false);
  const [backendOpen, setBackendOpen] = React.useState(false);
  const [frontendOpen, setFrontendOpen] = React.useState(false);

  ListItemLink.propTypes = {
    open: PropTypes.bool,
    to: PropTypes.string.isRequired,
  };

  function ListItemLink(props) {
    const { to, open, ...other } = props;
    const primary = breadcrumbs[to];

    let icon = null;
    if (open != null) {
      icon = open ? <ExpandLess /> : <ExpandMore />;
    }

    return (
      <li>
        <ListItemButton component={RouterLink} to={to} {...other}>
          <ListItemText primary={primary} />
          {icon}
        </ListItemButton>
      </li>
    );
  }

  //Функция для загрузки родительских ссылок
  async function loadParentItems() {
  try {
      const response = await fetch('http://localhost:5167/api/menuItems/getParentMenuItems', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const parentItems = await response.json();

      // Создаем новый объект с маршрутами
      const newBreadcrumbs = { ...breadcrumbNameMap };
      
      // Добавляем родительские пункты
      parentItems.forEach(item => {
        newBreadcrumbs[item.url] = item.title;
      });

      console.log('Обновленные маршруты:', newBreadcrumbs);
      setBreadcrumbs(newBreadcrumbs); // Обновляем состояние
      
      // Добавляем родительские ссылки
      parentItems.forEach(item => {
        breadcrumbNameMap[item.url] = item.title;
      });
      
      console.log('Родительские пункты загружены:', parentItems);
    } catch (error) {
      console.error('Ошибка загрузки:', error);
    }
  }

  useEffect(()=>{
    loadParentItems();
  },[])

  const handleHtmlClick = () => {
    setHtmlOpen((prevOpen) => !prevOpen);
  };
  const handleCssClick = () => {
    setCssOpen((prevOpen) => !prevOpen);
  };
  const handleJavaScriptClick = () => {
    setJavaScriptOpen((prevOpen) => !prevOpen);
  };
  const handleTypeScriptClick = () => {
    setTypeScriptOpen((prevOpen) => !prevOpen);
  };
  const handleDatabasesClick = () => {
    setDatabasesOpen((prevOpen) => !prevOpen);
  };
  const handleBackendClick = () => {
    setBackendOpen((prevOpen) => !prevOpen);
  };
  const handleFrontendClick = () => {
    setFrontendOpen((prevOpen) => !prevOpen);
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
        <Box
          sx={{ bgcolor: 'background.paper'}}
          component="nav"
          aria-label="mailbox folders"
        >
          <List  
            sx = {{
              padding: 0, 
              margin: 0
            }}
          >
            <ListItemLink 
              to="/html" open={htmlOpen} 
              onClick={handleHtmlClick} 
              sx={{
                "@media (prefers-color-scheme: light)": {
                  "&:hover": {
                    color: "primary.main",
                  },
                },
              }}
            />
            <Collapse component="li" in={htmlOpen} timeout="auto" unmountOnExit>
              <List disablePadding >
                <ListItemLink to="/html/bases" />
              </List>
            </Collapse>
            <ListItemLink to="/css" open={cssOpen} onClick={handleCssClick} />
            <Collapse component="li" in={cssOpen} timeout="auto" unmountOnExit>
              <List disablePadding >
                <ListItemLink to="/inbox/important" />
              </List>
            </Collapse>
            <ListItemLink to="/javascript" open={javaScriptOpen} onClick={handleJavaScriptClick} />
            <Collapse component="li" in={javaScriptOpen} timeout="auto" unmountOnExit>
              <List disablePadding >
                <ListItemLink to="/inbox/important" />
              </List>
            </Collapse>
            <ListItemLink to="/typescript" open={typeScriptOpen} onClick={handleTypeScriptClick} />
            <Collapse component="li" in={typeScriptOpen} timeout="auto" unmountOnExit>
              <List disablePadding >
                <ListItemLink to="/inbox/important" />
              </List>
            </Collapse>
            <ListItemLink to="/databases" open={databasesOpen} onClick={handleDatabasesClick} />
            <Collapse component="li" in={databasesOpen} timeout="auto" unmountOnExit>
              <List disablePadding >
                <ListItemLink to="/inbox/important" />
              </List>
            </Collapse>
            <ListItemLink to="/backend" open={backendOpen} onClick={handleBackendClick} />
            <Collapse component="li" in={backendOpen} timeout="auto" unmountOnExit>
              <List disablePadding sx={{ pl: 2 }}>
                <ListItemLink to='/backend/programming-fundamentals' />
                <ListItemLink to='/backend/core-backend-concepts' />
                <ListItemLink to='/backend/databases' />
                <ListItemLink to='/backend/api-design' />
                <ListItemLink to='/backend/auth' />
                <ListItemLink to='/backend/frameworks' />
              </List>
            </Collapse>
            <ListItemLink to="/frontend" open={frontendOpen} onClick={handleFrontendClick} />
            <Collapse component="li" in={frontendOpen} timeout="auto" unmountOnExit>
              <List disablePadding >
                <ListItemLink to="/inbox/important" />
              </List>
            </Collapse>
          </List>
        </Box>
      </Box>
    </MemoryRouter>
  );
}
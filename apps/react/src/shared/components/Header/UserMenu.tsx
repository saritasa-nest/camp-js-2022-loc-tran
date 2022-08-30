import { logout } from '@js-camp/react/store/auth/dispatchers';
import { useAppDispatch } from '@js-camp/react/store/store';
import { Box, Tooltip, IconButton, Avatar, Menu, MenuItem, Typography } from '@mui/material';
import { FC, memo, useState, MouseEvent } from 'react';

import styles from './UserMenu.module.css';

const UserMenuComponent: FC = () => {
  const dispatch = useAppDispatch();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = [
    {
      name: 'logout',
      action() {
        dispatch(logout());
      },
    },
  ];

  return (
    <Box>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="User avatar" />
        </IconButton>
      </Tooltip>
      <Menu
        className={styles['menu']}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map(setting => (
          <MenuItem key={setting.name} onClick={setting.action}>
            <Typography textAlign="center">{setting.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export const UserMenu = memo(UserMenuComponent);

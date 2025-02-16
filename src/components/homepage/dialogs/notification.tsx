'use client';
import { Close } from "@mui/icons-material";
import {
  Avatar,
  Dialog,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import * as React from "react";

interface NotificationProps {
  open: boolean;
  onClose: () => void;
  notification: Array<{
    notificationId: string;
    message: string;
    profile: string
  }>;
}

export function NotificationDialog({
  open,
  onClose,
  notification,
}: NotificationProps): React.JSX.Element {
  const userData = JSON.parse(sessionStorage.getItem("loginData") || "{}");

  return (
    <>
      {userData && (
        <Dialog
          aria-modal
          open={open}
          onClose={onClose}
          sx={{
            "& .MuiDialog-container": {
              height: "auto",
              textAlign: "right",
              position: "absolute",
            top:'3%',
            right: "5%",
            },
            "& .MuiDialog-paper": {
          borderRadius: "15px",
          overflowY:'unset',
          position:'relative',
        },
          }}
          PaperProps={{
            sx: {
              height: "auto",
              width: "360px",
              borderRadius: "15px",
            },
          }}
        >
          <IconButton sx={{position:'absolute',top:-45,right:0}} onClick={onClose}>
        <Close sx={{color:'#ffffff',bgcolor:'#aaa6a6',opacity:0.4,borderRadius:'50%',height:30,width:30}}/>
      </IconButton>
          <List sx={{ maxHeight: "350px", overflowY: "auto" }}>
            {notification.length > 0 ? (
              notification.map((item) => (
                <React.Fragment key={item.notificationId}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar src={item.profile}/>
                    </ListItemAvatar>
                    <ListItemText>
                    <span style={{fontSize:'15px' ,fontWeight: "bold" }}>
                      {" "}
                      {item.message.split(" ").splice(0, 2).join(" ")}
                    </span>
                    <span style={{fontSize:'15px',color: "#777777" }}>
                      {" "}
                      {item.message.split(" ").splice(2).join(" ")}
                    </span>
                  </ListItemText>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              ))
            ) : (
              <Typography textAlign="center" sx={{ mt: 2 }}>
                No notifications found
              </Typography>
            )}
          </List>
        </Dialog>
      )}
    </>
  );
}

"use client";
import { Button, Menu, MenuItem, Stack } from "@mui/material";
import React from "react";
import { ExpandMore } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { closeProductMenu, closeTemplateMenu, toggleProductMenu, toggleTemplateMenu } from "@/store/nav-slice";
import { menuItems } from "./config";
import { AppDispatch, useAppSelector } from "@/store/store";
export function MainNav(): React.JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
      const productMenuOpen = useAppSelector((state)=>state.nav.productMenuOpen);
      const templateMenuOpen = useAppSelector((state)=>state.nav.templateMenuOpen);
  
  const [productAnchorEl, setProductAnchorEl] = React.useState<null | HTMLElement>(null);
  const [templateAnchorEl, setTemplateAnchorEl] = React.useState<null | HTMLElement>(null);

  return (
      <Stack
        direction="row"
        sx={{ display: { xs: "none", lg: "flex", md: "flex" } }}
      >
        {menuItems.map((item)=>{
          const isSubMenu = item.submenu !== null;
          return (
            <React.Fragment key={item.label}>
              <Button
              sx={{
                color:'text.primary',
                textTransform:'none'
              }}
              onClick={(e)=>{
                if(isSubMenu){
                  const anchorSetter = item.label === 'Product' ? setProductAnchorEl : setTemplateAnchorEl;
                  anchorSetter(e.currentTarget);
                  const toggleAction = item.label === 'Product' ? toggleProductMenu : toggleTemplateMenu;
                  dispatch(toggleAction());
                }
              }}>
                {item.label} {isSubMenu && <ExpandMore />}
              </Button>
              {isSubMenu && (
                <Menu
                anchorEl={item.label === 'Product' ? productAnchorEl: templateAnchorEl}
                open={item.label === 'Product' ? productMenuOpen: templateMenuOpen}
                onClose={()=>dispatch(item.label === 'Product' ? closeProductMenu(): closeTemplateMenu())}
                >
                  {item.submenu?.map((subItem,index)=>(
                    <MenuItem
                    sx={{fontSize:'1rem'}}
                    key={index}
                    onClick={()=>dispatch(item.label === 'Product' ?closeProductMenu(): closeTemplateMenu())}>
                      {subItem}
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </React.Fragment>
          )
        })}
      </Stack>
    );
}

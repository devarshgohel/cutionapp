import { Flex, Button } from 'antd';
import { Link, useNavigate , } from 'react-router-dom';
import {ShoppingCartOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {  Drawer } from 'antd';

export function Header() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
    return (
        <>
        <Flex justify='space-around' className='bg-white mt-2.5'>
            <div>
                <img src='https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8aad816e1ead4175ca869_Logo.png' style={{ width: "120px" }} />
            </div>
            <div>
                <Flex>
                    <Button type='text' onClick={() => navigate("/App")} >Home</Button>
                    <Button type='text' onClick={() => navigate("/demo")}>About me</Button>
                    <Button type='text' onClick={() => navigate("/test")}>Products</Button>
                    <Button type='text' onClick={() => navigate("/contact")}>Contact me</Button>
                    <Button type='text'  onClick={showDrawer}><ShoppingCartOutlined /></Button>
                </Flex>
            </div>
        </Flex>
          <Drawer title="Your cart" onClose={onClose} open={open}>
          <p>No items found</p>
        </Drawer>
        </>
    )
}
import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Button } from 'antd';

export const Test = () => {
  const navigate = useNavigate();
  return (
    <>

      <div className="bg-fuchsia-300">
        <h1 className="text-white p-7">Products</h1>
      </div>
      <Flex justify="space-around" className="p-7">
        <div className="text-center">
          <img src="https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fee8179853822e2c85c0_p-1%2019.48.27-p-500.jpeg" style={{ width: '350px' }} />
          <p className="text-2xl">Plated Cushion</p>
          <p className="text-slate-400">$ 19.99 USD</p>
        </div>
        <div className="text-center">
          <img src="https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e3f6cf26d34b0b7ac10a_p-2-p-500.jpeg" style={{ width: '350px' }} />
          <p className="text-2xl">Silver Cushion</p>
          <p className="text-slate-400">$ 19.99 USD</p>
        </div>
        <div className="text-center">
          <img src="https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e347b51929d41cefee85_p-3-p-500.jpeg" style={{ width: '350px' }} />
          <p className="text-2xl">Deep Blue Cushion</p>
          <p className="text-slate-400">$ 19.99 USD</p>
        </div>
      </Flex>

      <Flex justify="space-around" className="p-7">
        <div className="text-center">
          <img src="https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e31c49a14202638e8840_p-4-p-500.jpeg" style={{ width: '350px' }} />
          <p className="text-2xl">Pink Cushion</p>
          <p className="text-slate-400">$ 19.99 USD</p>
        </div>
        <div className="text-center">
          <img src="https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e2e0f03b7d5cc10349cc_p-5-p-500.jpeg" style={{ width: '350px' }} />
          <p className="text-2xl">Black Cushion</p>
          <p className="text-slate-400">$ 19.99 USD</p>
        </div>
        <div className="text-center">
          <img src="https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e2a838042158384fff20_p-6-p-500.jpeg" style={{ width: '350px' }} />
          <p className="text-2xl">Green Cushion</p>
          <p className="text-slate-400">$ 19.99 USD</p>
        </div>
      </Flex>
      <Flex justify="space-around" className="bg-fuchsia-300 p-3" >
      <div className=" text-center">
        <img className="bg-fuchsia-400 rounded-full p-3 " src="https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8ebd4557fae86ba4aebb2_compras.svg" style={{ width: "50px" }} />
        <p className="text-white">Safe shopping</p>
        <p className="text-white">Safe shopping</p>
      </div>
      <div className="text-center">
        <img className="bg-fuchsia-400 rounded-full p-3  " src="https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8ebd4ef82dc17a92468cd_entrega.svg" style={{ width: "50px" }} />
        <p className="text-white">Fast shipping</p>
        <p className="text-white">Get your product fast</p>
      </div>
      <div className="text-center">
        <img className="bg-fuchsia-400 rounded-full p-3 " src="https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8ebd4380421b04e500298_como.svg" style={{ width: "50px" }} />
        <p className="text-white">Satisfaction guarantee</p>
        <p className="text-white">Or get your money back</p>
      </div>
      </Flex>
    </>
  );
};
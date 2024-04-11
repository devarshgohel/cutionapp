import React from "react";
import { Flex, Button } from 'antd';

export const Contact = () => {

    return (
        <>
            <Flex justify="space-around" className=" bg-fuchsia-300">
                <div className=" bg-fuchsia-300 text-white">
                    <h4>EMAIL</h4>
                    <p>support@website.com</p>
                    <h4>PHONE</h4>
                    <p>800-123-456</p>
                    <h4>ADDRESS</h4>
                    <p>23 Evergreen Street,</p>
                    <p>San Francisco, California</p>
                    <p>USA</p>
                </div>
                <div className="bg-fuchsia-300 text-white">
                    <h4>ADDRESS</h4>
                    <p className="text-2xl">Drop us your message and I'll get back to you as soon as possible.</p>
                    <div>
                        <Flex justify="space-between" className="my-2">
                            <input type="text" className="bg-fuchsia-300 p-2 px-5" name="fname" id="fname" placeholder="your name" />
                            <input type="text" className="bg-fuchsia-300  p-2 px-5 " name="lname" id="lname" placeholder="your company" />
                        </Flex>
                        <Flex justify="space-between" className="my-2">
                            <input type="phone" className="bg-fuchsia-300  p-2 px-5" name="fname" id="fname" placeholder="your phone" />
                            <input type="email" className="bg-fuchsia-300  p-2 px-5" name="lname" id="lname" placeholder="your email" />
                        </Flex>
                        <div>
                            <input type="text" className="bg-fuchsia-300  p-2 px-5 my-2" name="message" id="message" placeholder="your message" />
                        </div>
                        <div>
                            <Button type='default' className=' text-fuchsia-300  p-2 px-5 border-fuchsia-300'>LEARN MORE</Button>
                        </div>
                    </div>
                </div>
            </Flex>
            <div className="text-center">
                <h5 className="text-fuchsia-300">NEWSLETTER</h5>
                <p className="text-2xl">Get promotions & updates!</p>
                <div>
                    <input type="text" className="p-2" placeholder="your name" />
                    <input type="text" className="p-2" placeholder="your email" />
                    <Button type='text' className=' text-fuchsia-300 border-fuchsia-300 '>LEARN MORE</Button>
                </div>
            </div>
            <Flex justify="space-around" className="bg-fuchsia-300 p-3 my-7" >
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
}
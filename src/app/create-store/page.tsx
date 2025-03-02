"use client";
import React from "react";
import { Form, Divider } from "antd";
import {
  DeploymentUnitOutlined,
  DesktopOutlined,
  EnvironmentOutlined,
  EuroCircleOutlined,
  MailOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import EXInput from "@/components/utils/EXInput";
import EXSelect from "@/components/utils/EXSelect";
import { TValues } from "@/types";



const CreateForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: TValues) => { 
    const modifieddata = {
      ...values,
      domain: values?.domain?.replace(/\s/g, "").toLowerCase(),
    };
    const res = await fetch(
      "https://interview-task-green.vercel.app/task/domains/check/uniquedomain.expressitbd.com"
    );
    const response = await res.json();
    if (response?.succcess == true) {
      const response = await fetch(
        "https://interview-task-green.vercel.app/task/stores/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(modifieddata),
        }
      );

      const data = await response.json();
      if (data.succcess) {
        alert("Store Created Successfully ");
      }
    }
  };

  const countryOptions: { value: string; label: string }[] = [
    { value: "Bangladesh", label: "Bangladesh" },
    // Add more countries as needed
  ];

  const categoryOptions: { value: string; label: string }[] = [
    { value: "Fashion", label: "Fashion" },
    // Add more categories as needed
  ];

  const currencyOptions: { value: string; label: string }[] = [
    { value: "BDT", label: "BDT" },
    // Add more currencies as needed
  ];

  return (
    <div className="w-full flex justify-center items-center bg-[#0c0517]    ">
      <Form
        form={form}
        name="storeCreation"
        onFinish={onFinish}
        className="w-full md:w-3/5 bg-white lg:rounded-lg shadow-md p-4 md:p-8"
      >
        <h2 className="text-3xl md:text-2xl font-bold mb-4  ">
          Create a store
        </h2>
        <p className="text-gray-600 mb-6  ">
          Add your basic store information and complete the setup.
        </p>
        <Divider style={{ borderColor: "gray", borderWidth: "1px" }} />

        {/* Store Name */}
        <div className="flex flex-wrap md:flex-nowrap justify-between ">
          <div className="w-full md:w-1/2">
            <div className="flex">
              <DesktopOutlined className="mt-1 text-blue-500 px-2" />
              <span className="font-bold">Give Your Online Store Name</span>
            </div>
            <p className="pl-8 text-sm md:text-base">
              A great store name is a big part of your success.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <EXInput
              name="name"
              placeholder="How’d you like to call your store?"
              rules={[{ required: true, message: "Please enter store name!" }]}
            />
          </div>
        </div>

        {/* Store Subdomain */}
        <div className="flex flex-wrap md:flex-nowrap justify-between   lg:mt-4">
          <div className="w-full md:w-1/2">
            <div className="flex">
              <RiseOutlined className="mt-1 text-blue-500 px-2" />
              <span className="font-bold">Your Online Store Subdomain</span>
            </div>
            <p className="pl-8 text-sm md:text-base">
              A SEO-friendly store name is a crucial part of your success.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <EXInput
              name="domain"
              placeholder="Enter your domain name"
              rules={[
                { required: true, message: "Please enter store subdomain!" },
              ]}
              addonAfter={
                <span className="bg-gray-100 rounded">expressitbd.com</span>
              }
            />
          </div>
        </div>

        {/* Store Location */}
        <div className="flex flex-wrap md:flex-nowrap justify-between   lg:mt-4">
          <div className="w-full md:w-1/2">
            <div className="flex">
              <EnvironmentOutlined className="mt-1 text-blue-500 px-2" />
              <span className="font-bold">Where’s your store located?</span>
            </div>
            <p className="pl-8 text-sm md:text-base">
              Set your store’s default location to optimize store access.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <EXSelect
              name="country"
              rules={[
                { required: true, message: "Please select store location!" },
              ]}
              options={countryOptions}
              placeholder="Select a country"
            />
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap justify-between   lg:mt-4">
          <div className="w-full md:w-1/2">
            <div className="flex">
              <DeploymentUnitOutlined className="mt-1 text-blue-500 px-2" />
              <span className="font-bold">What’s your category?</span>
            </div>
            <p className="pl-8 text-sm md:text-base">
              Set your store’s default category to optimize store access.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <EXSelect
              name="category"
              rules={[
                { required: true, message: "Please select store category!" },
              ]}
              options={categoryOptions}
              placeholder="Select a category"
            />
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap justify-between   lg:mt-4">
          <div className="w-full md:w-1/2">
            <div className="flex">
              <EuroCircleOutlined className="mt-1 text-blue-500 px-2" />
              <span className="font-bold">Choose Store Currency</span>
            </div>
            <p className="pl-8 text-sm md:text-base">
              This is the main currency you wish to sell in.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <EXSelect
              name="currency"
              rules={[
                { required: true, message: "Please select store currency!" },
              ]}
              options={currencyOptions}
              placeholder="Select a currency"
            />
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap justify-between   lg:mt-4">
          <div className="w-full md:w-1/2">
            <div className="flex">
              <MailOutlined className="mt-1 text-blue-500 px-2" />
              <span className="font-bold">Store Contact Email</span>
            </div>
            <p className="pl-8 text-sm md:text-base">
              This is the email we will use to send notifications.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <EXInput
              name="email"
              placeholder="store@example.com"
              rules={[{ required: true, message: "Please enter store email!" }]}
            />
          </div>
        </div>
        <Form.Item className="mb-0 lg:mt-6 sm:mt-4">
          <button
            type="submit"
            className="w-full  bg-[#b46565dd] text-white font-semibold text-sm   px-4 py-2 rounded-md hover:bg-[#e34b4b]"
          >
            Create Store
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateForm;

import { useEffect, useRef, useState } from "react";
import { Button, Form, Input, Select } from "antd";
const { Option } = Select;

const onFinish = () => {};

const ContactUsSection = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div
      className="mt-28 px-4 sm:px-8 md:px-16 lg:px-36 w-full"
      id="contactUsSection"
      ref={sectionRef}
    >
      <div className="text-5xl font-bold text-center mb-10">Get In Touch</div>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
          animate ? "animate-fade-right" : "animate-fade-left"
        }`}
      >
        {/* Contact Form */}
        <div>
          <Form name="contactUs" onFinish={onFinish}>
            <div className="mb-3">Name</div>
            <Form.Item
              name={["user", "name"]}
              rules={[{ required: true, message: "Please input your name" }]}
            >
              <Input />
            </Form.Item>
            <div className="mb-3">Mobile Number</div>
            <Form.Item
              name="phone"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>
            <div className="mb-3">Email</div>
            <Form.Item
              name={["user", "email"]}
              rules={[
                { type: "email", message: "Email is not a valid email" },
                { required: true, message: "Please input your Email!" },
              ]}
            >
              <Input />
            </Form.Item>
            <div className="mb-3">Description</div>
            <Form.Item
              name={["user", "introduction"]}
              rules={[{ required: true, message: "Please input your reason!" }]}
            >
              <Input.TextArea autoSize={{ minRows: 4, maxRows: 8 }} />
            </Form.Item>
            <div className="flex justify-center">
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>

        {/* Map Section */}
        <div className="h-[300px] md:h-[400px] w-full  rounded-lg shadow-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.8490258012025!2d139.8861897!3d36.0483903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018a51949d602a9%3A0xf04414eba35964a0!2zUC5BIEdyb3VwIOagquW8j-S8muekvg!5e0!3m2!1sen!2slk!4v1737793839612!5m2!1sen!2slk"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;

import { Button } from "antd";
export default function Header() {
  return (
    <header className="bg-white text-secondary-base p-4">
      <div className="container px-5 mx-auto flex justify-between items-center ">
        <h1 className="text-lg font-bold">Company Name</h1>
        <div className="flex flex-row items-center gap-2">
          <nav className="uppercase">
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
          <Button type="primary">Primary Button</Button>
        </div>
      </div>
    </header>
  );
}

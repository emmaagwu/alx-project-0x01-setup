
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-2 md:mb-0">© {new Date().getFullYear()} Daily Contents. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li className="hover:underline">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="hover:underline">
            <Link href="/users">Users</Link>
          </li>
          <li className="hover:underline">
            <Link href="/">Home</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
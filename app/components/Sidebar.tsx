import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import classNames from "classnames";
import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";
import AppLogo from "./sub-components/AppLogo";

type BlogMetadata = {
  slug: string;
};

const Sidebar = ({ blogs }: { blogs: BlogMetadata[] }) => {
  const router = useRouter();
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const Icon = isSidebarVisible ? BiRightArrowAlt : BiLeftArrowAlt;
  const handleBlogClick = (slug: string) => {
    const transformedSlug = slug.replace(/ /g, '_');
    router.push(`/blog?slug=${transformedSlug}`, undefined);
  };
  const Blogs = blogs.map((blog) => {
    return {
      slug: blog.slug
        .replace(/_/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase())
    };
  })
  return (
    <div
      className={classNames({
        "bg-indigo-700 text-zinc-50 fixed md:static md:translate-x-0 z-20 h-full":
          true,
        "transition-all duration-300 ease-in-out": true,
        "w-[300px]": !isSidebarVisible,
        "w-14": isSidebarVisible,
      })}
    >
      <div
        className={classNames({
          "flex flex-col justify-between h-screen sticky inset-0 w-full": true,
        })}
      >
        {/* logo and collapse button */}
        <div
          className={classNames({
            "flex items-center border-b border-b-indigo-800 transition-none":
              true,
            "p-4 justify-between": !isSidebarVisible,
            "py-4 justify-center": isSidebarVisible,
          })}
        >
          {!isSidebarVisible && (
            <span className="whitespace-nowrap"><AppLogo
            onClick={() => window.location.assign("/")}
            className="cursor-pointer"
          /></span>
          )}
          <button
            className="grid place-content-center hover:bg-indigo-800 w-10 h-10 rounded-full opacity-100"
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          >
            <Icon className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-grow">
          <ul
            className={classNames({
              "my-2 flex flex-col gap-2 items-stretch": true,
            })}
          >
            {Blogs.map((blog) => (
              <li
                key={blog.slug}
                onClick={() => handleBlogClick(blog.slug)}
                className={classNames({
                  "text-indigo-100 hover:bg-indigo-900 flex": true, //colors
                  "transition-colors duration-300": true, //animation
                  "rounded-md p-2 mx-3 gap-4 ": !isSidebarVisible,
                  "rounded-full p-2 mx-3 w-10 h-10": isSidebarVisible,
                })}
              >
                <span className="cursor-pointer">{!isSidebarVisible && blog.slug}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;

import Image from "next/image";
import React from "react";

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

// const CustomLink = ({
//   href,
//   ...props
// }: {
//   href: string;
//   [key: string]: React.ReactNode;
// }) => {
//   const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

//   if (isInternalLink) {
//     return (
//       <Link href={href} {...props}>
//         {props.children}
//       </Link>
//     );
//   }

//   return <a rel="noopener noreferrer" target="_blank" {...props} />;
// };

const CustomImage = ({ src, alt }: { src: string; alt: string }) => {
  return <Image alt={alt} className="rounded-lg" src={src} />;
};

// This replaces rehype-slug
const getSlug = (title: string) => {
  const slug = title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

  return slug;
};

function createHeading(level: number) {
  const Heading = ({ children }: { children: React.ReactNode }) => {
    const slug = getSlug(children as string);

    return React.createElement(`h${level}`, { id: slug }, [
      React.createElement(
        "a",
        {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
          "aria-label": `Link to ${children}`,
        },
        "#",
      ),
      children,
    ]);
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

export const globalComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: CustomImage,
  a: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
  Table,
};

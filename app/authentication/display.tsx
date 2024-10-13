"use client";
import { useState } from "react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { File, Folder, Tree } from "@/components/ui/file-tree";
import CodeBlock from "./Boxcode";
import { code } from "./data";

function Display() {
  const [selectedFile, setSelectedFile] = useState("main.go");
  const [syntaxcode, setSyntaxCode] = useState(code.main);
  const activeClass =
    "bg-gradient-to-r from-purple-500/80 to-pink-500/80 rounded-md px-1 ";
  const handleSelectFile = (file: string) => {
    setSelectedFile(file);
    switch (file) {
      case "main.go":
        setSyntaxCode(code.main);
        break;
      case "db.go":
        setSyntaxCode(code.db);
        break;
      case "middleware.go":
        setSyntaxCode(code.md);
        break;
      case "models.go":
        setSyntaxCode(code.models);
        break;
      case "auth.go":
        setSyntaxCode(code.auth);
        break;
      case "emp.go":
        setSyntaxCode(code.emp);
        break;
      case "bcrypt.go":
        setSyntaxCode(code.bcrypt);
        break;
      case "jwt.go":
        setSyntaxCode(code.jwt);
        break;
      default:
        break;
    }
  };
  return (
    <main className=" flex mt-4 relative rounded-md border p-1 overflow-hidden">
      <div className="relative flex w-1/5 min-w-44 flex-col items-center justify-center overflow-hidden bg-background">
        <Tree
          className="p-2 overflow-hidden rounded-md bg-background"
          initialSelectedId="main"
          initialExpandedItems={["src"]}
          elements={ELEMENTS}
        >
          <Folder element="src" value="src">
            <Folder value="db" element="db">
              <File value="db.go">
                <p
                  className={selectedFile === "db.go" ? activeClass : ""}
                  onClick={() => handleSelectFile("db.go")}
                >
                  db.go
                </p>
              </File>
            </Folder>
            <Folder value="middleware" element="middleware">
              <File value="middleware.go">
                <p
                  className={
                    selectedFile === "middleware.go" ? activeClass : ""
                  }
                  onClick={() => handleSelectFile("middleware.go")}
                >
                  middleware.go
                </p>
              </File>
            </Folder>
            <Folder value="models" element="models">
              <File value="models.go">
                <p
                  className={selectedFile === "models.go" ? activeClass : ""}
                  onClick={() => handleSelectFile("models.go")}
                >
                  models.go
                </p>
              </File>
            </Folder>
            <Folder value="routing" element="routing">
              <Folder value="auth" element="auth">
                <File value="auth.go">
                  <p
                    className={selectedFile === "auth.go" ? activeClass : ""}
                    onClick={() => handleSelectFile("auth.go")}
                  >
                    auth.go
                  </p>
                </File>
              </Folder>
              <Folder value="emp" element="emp">
                <File value="emp.go">
                  <p
                    className={selectedFile === "emp.go" ? activeClass : ""}
                    onClick={() => handleSelectFile("emp.go")}
                  >
                    emp.go
                  </p>
                </File>
              </Folder>
            </Folder>
            <Folder value="utils" element="utils">
              <File value="bcrypt.go">
                <p
                  className={selectedFile === "bcrypt.go" ? activeClass : ""}
                  onClick={() => handleSelectFile("bcrypt.go")}
                >
                  bcrypt.go
                </p>
              </File>
              <File value="jwt.go">
                <p
                  className={selectedFile === "jwt.go" ? activeClass : ""}
                  onClick={() => handleSelectFile("jwt.go")}
                >
                  jwt.go
                </p>
              </File>
            </Folder>
          </Folder>
          <File value="main">
            <p
              className={selectedFile === "main.go" ? activeClass : ""}
              onClick={() => handleSelectFile("main.go")}
            >
              main.go
            </p>
          </File>
        </Tree>
      </div>

      <div className="w-4/5">
        <ScrollShadow className="max-h-[790px]" size={5} hideScrollBar>
          <CodeBlock code={syntaxcode} language="go" />
        </ScrollShadow>
      </div>
    </main>
  );
}

export default Display;
const ELEMENTS = [
  {
    id: "src",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "db",
        isSelectable: true,
        name: "db",
        children: [
          {
            id: "db.go",
            isSelectable: true,
            name: "db.go",
          },
        ],
      },
      {
        id: "middleware",
        isSelectable: true,
        name: "middleware",
        children: [
          {
            id: "middleware.go",
            isSelectable: true,
            name: "middleware.go",
          },
        ],
      },
      {
        id: "models",
        isSelectable: true,
        name: "models",
        children: [
          {
            id: "models.go",
            isSelectable: true,
            name: "models.go",
          },
        ],
      },
      {
        id: "routing",
        isSelectable: true,
        name: "routing",
        children: [
          {
            id: "auth",
            isSelectable: true,
            name: "auth",
            children: [
              {
                id: "auth.go",
                isSelectable: true,
                name: "auth.go",
              },
            ],
          },
          {
            id: "emp",
            isSelectable: true,
            name: "emp",
            children: [
              {
                id: "emp.go",
                isSelectable: true,
                name: "emp.go",
              },
            ],
          },
        ],
      },
      {
        id: "utils",
        isSelectable: true,
        name: "utils",
        children: [
          {
            id: "bcrypt.go",
            isSelectable: true,
            name: "bcrypt.go",
          },
          {
            id: "jwt.go",
            isSelectable: true,
            name: "jwt.go",
          },
        ],
      },
    ],
  },
  {
    id: "main",
    isSelectable: true,
    name: "main.go",
  },
];

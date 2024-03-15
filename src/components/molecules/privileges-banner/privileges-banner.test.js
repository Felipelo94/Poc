import React from "react";
import { getByTestId, render } from "@testing-library/react";
import { PrivilegesBanner } from "./privileges-banner";

describe("PrivilegesBanner", () => {
  const mockData = {
    titulo: "Título de ejemplo",
    descripcion: {
      descripcion: "Descripción de ejemplo"
    },
    textoCallToAction1: "Call to Action",
    linkCallToAction1: "/ruta-ejemplo",
    imagenFondoPrincipal: {
      file: {
        url: "/imagen-fondo-ejemplo.jpg"
      }
    },
    imagenPrincipal: {
      file: {
        fileName: "imagen-principal-ejemplo.jpg",
        url: "/imagen-principal-ejemplo.jpg"
      }
    }
  };
  test("should first", () => {
    render(<PrivilegesBanner data={mockData} />);
  });
});

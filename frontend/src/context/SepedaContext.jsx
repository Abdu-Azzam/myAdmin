import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const SepedaContext = createContext();

export const useSepedaContext = () => {
  return useContext(SepedaContext);
};

export const SepedaProvider = ({ children }) => {
  const [sepedaList, setSepedaList] = useState([]);

  // Mengambil data sepeda dari server
  useEffect(() => {
    axios
      .get("http://localhost:5000/sepeda")
      .then((response) => {
        setSepedaList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sepeda data:", error);
      });
  }, []);

  // Menambahkan sepeda baru
  const addSepeda = (sepeda) => {
    axios
      .post("http://localhost:5000/sepeda", sepeda)
      .then((response) => {
        setSepedaList([...sepedaList, { ...sepeda, id: response.data.id }]);
      })
      .catch((error) => {
        console.error("Error adding sepeda:", error);
      });
  };

  // Mengupdate sepeda
  const updateSepeda = (id, updatedSepeda) => {
    axios
      .put(`http://localhost:5000/sepeda/${id}`, updatedSepeda)
      .then(() => {
        // Mengupdate sepeda di state
        setSepedaList(sepedaList.map((sepeda) => (sepeda.id === parseInt(id) ? { ...sepeda, ...updatedSepeda } : sepeda)));
      })
      .catch((error) => {
        console.error("Error updating sepeda:", error);
      });
  };

  // Menghapus sepeda
  const removeSepeda = (id) => {
    axios
      .delete(`http://localhost:5000/sepeda/${id}`)
      .then(() => {
        setSepedaList(sepedaList.filter((sepeda) => sepeda.id !== parseInt(id)));
      })
      .catch((error) => {
        console.error("Error deleting sepeda:", error);
      });
  };

  return <SepedaContext.Provider value={{ sepedaList, addSepeda, updateSepeda, removeSepeda }}>{children}</SepedaContext.Provider>;
};

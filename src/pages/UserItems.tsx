import React, { useEffect, useState } from "react";
import { authStore } from "../auth";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import Card from "../components/Card";

const UserItems = () => {
  const [purchased, setPurchased] = useState<any[]>([]);

  useEffect(() => {
    const fetchVouchers = async () => {
      try {
        const purchasedData = await authStore.getUserPurchasedItems();
        if (purchasedData) {
            console.log(purchasedData)
            setPurchased(purchasedData);
        }
      } catch (err: any) {
        let msg = "Failed to fetch surveys.";
        const error = err as AxiosError;

       
        toast.error(msg);
      }
    };

    fetchVouchers();
  }, []);

  return (
    <>Hello</>
  );
};

export default UserItems;

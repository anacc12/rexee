import React, { useEffect, useState } from "react";
import { authStore } from "../auth";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import Card from "../components/Card";

const UserVouchers = () => {
  const [vouchers, setVouchers] = useState<any[]>([]);

  useEffect(() => {
    const fetchVouchers = async () => {
      try {
        const vouchersData = await authStore.getUserVouchers();
        if (vouchersData) {
          setVouchers(vouchersData);
        }
      } catch (err: any) {
        let msg = "Failed to fetch surveys.";
        const error = err as AxiosError;

        if (error.response?.data) {
          const responseData = error.response.data as { [key: string]: any };

          if (typeof responseData === "object" && responseData !== null) {
            for (const key in responseData) {
              if (Object.prototype.hasOwnProperty.call(responseData, key)) {
                const value = responseData[key];
                const txt = Array.isArray(value) ? value.join("") : value;
                if (txt && txt !== "") {
                  msg = txt;
                }
              }
            }
          }
        }

        toast.error(msg);
      }
    };

    fetchVouchers();
  }, []);

  return (
    <div className="w-screen h-screen flex bg-extra-light gap-6 relative">
      <Navigation active="vouchers" />

      <div className="flex flex-col flex-1 gap-4 ml-[264px] p-6">
        <div className="flex items-center gap-2">
          <h4 className="text-[24px] font-bold">Your Vouchers </h4>
          <div className="flex items-center justify-center w-[24px] h-[24px] rounded-full !text-white bg-primary text-[13px] leading-[0px] font-medium">
            {vouchers.length}
          </div>
        </div>

        <Card
          rounded="xxl"
          cardStyle="outline"
          cardSize="base"
          className="h-full overflow-auto "
        >
          {/* <p className="text-[18px] font-semibold text-dark mb-4">{isCompleted ? "Completed surveys" : "All surveys"}</p> */}

          <div className="grid grid-cols-3 gap-4">
            {vouchers && vouchers.length > 0 ? (
              vouchers.map((voucher, ind) => (
                <>
                  <Card
                    key={voucher.token}
                    // cardStyle="outline"
                    rounded="xl"
                    cardSize="sm"
                    className="flex flex-col gap-4 border border-gray-light"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col gap-2 items-start">
                        <div className="w-[32px] h-[32px] text-[13px] bg-extra-light text-primary font-bold border border-light rounded-full flex items-center justify-center">
                          {ind}.
                        </div>
                        <h5 className="text-[16px] font-semibold">
                          {voucher.code}
                        </h5>
                      </div>

                      <p className="text-gray-dark">{voucher.datetime}</p>
                    </div>
                  </Card>
                </>
              ))
            ) : (
              <p>No vouchers found.</p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserVouchers;

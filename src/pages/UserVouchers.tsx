import React, { useEffect, useState } from "react";
import { authStore } from "../auth";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import Card from "../components/Card";

const UserVouchers = () => {
  const [surveys, setSurveys] = useState<any[]>([]);
  const [completed, setCompleted] = useState<any[]>([]);

  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const surveysData = await authStore.getUserSurveys(false);
        const completedData = await authStore.getUserSurveys(true);
        if (surveysData) {
          setSurveys(surveysData);
        }
        if (completedData) {
          setCompleted(completedData);
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

    fetchSurveys();
  }, []);

  return (
    <div className="w-screen h-screen flex bg-extra-light gap-6 relative">
      <Navigation active="surveys"/>

      <div className="flex flex-col flex-1 gap-4 ml-[264px] p-6">
        <div className="flex items-center gap-2">
          <h4 className="text-[24px] font-bold">Your Vouchers </h4>
          <div className="flex items-center justify-center w-[24px] h-[24px] rounded-full !text-white bg-primary text-[13px] leading-[0px] font-medium">
            {surveys.length}
          </div>
        </div>

        <Card
          rounded="xxl"
          cardStyle="outline"
          cardSize="base"
          className="h-full overflow-auto "
        >
          <ul
            className="inline-flex p-1 list-none rounded-full bg-extra-light mb-6"
            data-tabs="tabs"
            role="list"
          >
            <li className="flex-auto text-center">
              <a
                className={`flex items-center justify-center w-full px-12 py-2 text-[14px] mb-0 transition-all ease-in-out border-0 rounded-full cursor-pointer text-slate-700 bg-inherit ${
                  !isCompleted ? "bg-white font-semibold" : "font-medium"
                }`}
                onClick={() => setIsCompleted(false)}
              >
                All surveys
              </a>
            </li>
            <li className="flex-auto text-center">
              <a
                className={`flex items-center justify-center w-full px-12 py-2 text-[14px] mb-0 transition-all ease-in-out border-0 rounded-full cursor-pointer text-slate-700 bg-inherit ${
                  isCompleted ? "bg-white font-semibold" : "font-medium"
                }`}
                onClick={() => setIsCompleted(true)}
              >
                Completed surveys
              </a>
            </li>
          </ul>

          {/* <p className="text-[18px] font-semibold text-dark mb-4">{isCompleted ? "Completed surveys" : "All surveys"}</p> */}

          <div className="grid grid-cols-3 gap-4">
            {isCompleted && completed.length > 0 ? (
              completed.map((survey, ind) => (
                <>
                  <Card
                    key={survey.token}
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
                          {survey.name}
                        </h5>
                      </div>

                      <div className="flex gap-2">
                        <div className="px-3 py-2 text-[11px] font-semibold leading-[8px] border border-light text-primary rounded-full">
                          {" "}
                          Inc. {survey.incentive_points}
                        </div>
                        <div className="px-3 py-2 text-[11px] font-semibold leading-[8px] border border-light text-primary rounded-full">
                          {" "}
                          Exp. {survey.experience_points}
                        </div>
                      </div>

                      <p className="text-gray-dark">{survey.scene}</p>
                    </div>

                    <button className="w-full p-2 bg-primary text-white text-[13px] rounded-full hover:bg-primary-dark transition">
                      View
                    </button>
                  </Card>
                </>
              ))
            ) : !isCompleted && surveys.length > 0 ? (
              surveys.map((survey, ind) => (
                <>
                  <Card
                    key={survey.token}
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
                          {survey.name}
                        </h5>
                      </div>

                      <div className="flex gap-2">
                        <div className="px-3 py-2 text-[11px] font-semibold leading-[8px] border border-light text-primary rounded-full">
                          {" "}
                          Inc. {survey.incentive_points}
                        </div>
                        <div className="px-3 py-2 text-[11px] font-semibold leading-[8px] border border-light text-primary rounded-full">
                          {" "}
                          Exp. {survey.experience_points}
                        </div>
                      </div>

                      <p className="text-gray-dark">{survey.scene}</p>
                    </div>

                    <button className="w-full p-2 bg-primary text-white text-[13px] rounded-full hover:bg-primary-dark transition">
                      View
                    </button>
                  </Card>
                </>
              ))
            ) : (
              <p>No surveys found.</p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserVouchers;

import React, { useEffect, useState } from "react";
import { authStore } from "../auth";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import Card from "../components/Card";
import { File } from "react-feather";

const UserSurveys = () => {
  const [surveys, setSurveys] = useState<any[]>([]);
  const [completed, setCompleted] = useState<any[]>([]);

  // Add loading state
  const [loading, setLoading] = useState(true);

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
      } finally {
        // Set loading to false after the surveys are fetched or if there is an error
        setLoading(false);
      }
    };

    fetchSurveys();
  }, []);

  return (
    <div className="w-screen h-full min-h-screen md:h-screen flex flex-col md:flex-row bg-extra-light gap-0 md:gap-6 relative">
      <Navigation active="surveys" />

      <div className="flex flex-col flex-1 gap-4 md:ml-[240px] p-6">
        <div className="flex items-center gap-2">
          <h4 className="text-[24px] font-bold">Your Surveys </h4>
          <div className="flex items-center justify-center w-[24px] h-[24px] rounded-full !text-white bg-primary text-[13px] leading-[0px] font-medium">
            {surveys.length}
          </div>
        </div>

        <Card
          rounded="xxl"
          cardStyle="outline"
          cardSize="base"
          className="h-full overflow-auto"
        >
          <ul
            className="inline-flex p-1 list-none rounded-full bg-extra-light mb-6"
            data-tabs="tabs"
            role="list"
          >
            <li className="flex-auto text-center">
              <a
                className={`flex items-center justify-center w-full px-12 py-2 text-[14px] mb-0 transition-all ease-in-out border-0 rounded-full cursor-pointer text-slate-700 bg-inherit ${!isCompleted ? "bg-white font-semibold" : "font-medium"
                  }`}
                onClick={() => setIsCompleted(false)}
              >
                All surveys
              </a>
            </li>
            <li className="flex-auto text-center">
              <a
                className={`flex items-center justify-center w-full px-12 py-2 text-[14px] mb-0 transition-all ease-in-out border-0 rounded-full cursor-pointer text-slate-700 bg-inherit ${isCompleted ? "bg-white font-semibold" : "font-medium"
                  }`}
                onClick={() => setIsCompleted(true)}
              >
                Completed surveys
              </a>
            </li>
          </ul>

          {/* Show loading state when surveys are being fetched */}
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <div className="loader bg-white outline-gray-light p-5 rounded-full flex space-x-3">
                <div
                  className="w-3 h-3 bg-primary rounded-full animate-bounce"
                  style={{ animationDuration: "0.5s", animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-primary rounded-full animate-bounce"
                  style={{ animationDuration: "0.5s", animationDelay: "0.3s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-primary rounded-full animate-bounce"
                  style={{ animationDuration: "0.5s", animationDelay: "0.6s" }}
                ></div>
              </div>
            </div>
          ) : isCompleted && completed.length > 0 ? (
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {completed.map((survey, ind) => (
                <Card
                  key={survey.token}
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
                    <p className="text-gray-dark">{survey.scene}</p>
                    <div className="flex gap-2">

                      <div className="px-3 py-2 text-[11px] font-semibold leading-[8px] bg-primary text-white rounded-full">
                        Inc. {survey.incentive_points}
                      </div>
                      <div className="px-3 py-2 text-[11px] font-semibold leading-[8px] bg-primary text-white rounded-full">
                        Exp. {survey.experience_points}
                      </div>
                    </div>


                  </div>
                </Card>
              ))}
            </div>
          ) : !isCompleted && surveys.length > 0 ? (
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {surveys.map((survey, ind) => (
                <Card
                  key={survey.token}
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
                    <p className="text-gray-dark">{survey.scene}</p>
                    <div className="flex gap-2">
                      <div className="px-3 py-2 text-[11px] font-semibold leading-[8px] bg-primary text-white rounded-full">
                        Inc. {survey.incentive_points}
                      </div>
                      <div className="px-3 py-2 text-[11px] font-semibold leading-[8px] bg-primary text-white rounded-full">
                        Exp. {survey.experience_points}
                      </div>
                    </div>


                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-64 bg-gray-50 rounded-lg">
              <File className="w-12 h-12 text-gray-400 mb-4" />
              <p className="text-gray-500 text-lg font-semibold">No surveys available</p>
              <p className="text-gray-400 text-sm">Please check back later for new surveys.</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default UserSurveys;

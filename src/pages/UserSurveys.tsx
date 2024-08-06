import React, { useEffect, useState } from "react";
import { authStore } from "../auth";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

const UserSurveys = () => {
  const [surveys, setSurveys] = useState<any[]>([]);

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const surveysData = await authStore.getUserSurveys();
        if (surveysData) {
          setSurveys(surveysData);
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
    <div className="w-screen h-screen flex">
      <Navigation />

      <div className="flex flex-col flex-1 p-6 gap-4">
        <h4 className="text-[24px] font-bold">Your Surveys</h4>
        <hr className="border-t-1 border-gray-light w-full" />

        <div className="flex flex-col gap-4">
          {surveys.length > 0 ? (
            surveys.map((survey) => (
              <div key={survey.token} className="p-4 bg-light rounded-lg shadow">
                <h5 className="text-[20px] font-semibold">{survey.name}</h5>
                <p>{survey.scene}</p>
              </div>
            ))
          ) : (
            <p>No surveys found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserSurveys;

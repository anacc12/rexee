import React, { useEffect, useState } from "react";
import { authStore, IAuthenticatedUser } from "../auth";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Card from "../components/Card";
import LazyImage from "../components/LazyImage"; // Assuming LazyImage is used in UserItems
import Item from "../assets/img/items";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";

const UserDashboard = () => {
  const items = [
    {
      id: "1",
      name: "Acireale Cabinet",
      cost: 100,
      img: Item.Item1,
    },
    {
      id: "2",
      name: "Agrigento Cabinet",
      cost: 100,
      img: Item.Item2,
    },
    {
      id: "3",
      name: "Catania Cabinet",
      cost: 100,
      img: Item.Item3,
    },
    {
      id: "4",
      name: "Caltabellota Cabinet",
      cost: 100,
      img: Item.Unknown,
    },
    {
      id: "5",
      name: "Caltagirone Cabinet",
      cost: 100,
      img: Item.Item5,
    },
    {
      id: "6",
      name: "Corleone Lamp",
      cost: 100,
      img: Item.Item6,
    },
    {
      id: "7",
      name: "Enna Lamp",
      cost: 100,
      img: Item.Item7,
    },
    {
      id: "8",
      name: "Erice Lamp",
      cost: 100,
      img: Item.Item8,
    },
    {
      id: "9",
      name: "Marsala Lamp",
      cost: 100,
      img: Item.Item9,
    },
    {
      id: "10",
      name: "Marzamemi Lamp",
      cost: 100,
      img: Item.Item10,
    },
    {
      id: "11",
      name: "Messina Shelf",
      cost: 100,
      img: Item.Item11,
    },
    {
      id: "12",
      name: "Modica Shelf",
      cost: 100,
      img: Item.Item12,
    },
    {
      id: "13",
      name: "Mondello Shelf",
      cost: 100,
      img: Item.Unknown,
    },
    {
      id: "14",
      name: "Monreale Shelf",
      cost: 100,
      img: Item.Item14,
    },
    {
      id: "15",
      name: "Noto Shelf",
      cost: 100,
      img: Item.Item15,
    },
    {
      id: "16",
      name: "Palermo TV Cabinet",
      cost: 100,
      img: Item.Item16,
    },
    {
      id: "17",
      name: "Ragusa TV Cabinet",
      cost: 100,
      img: Item.Item17,
    },
    {
      id: "18",
      name: "Sciacca TV Cabinet",
      cost: 100,
      img: Item.Item18,
    },
    {
      id: "19",
      name: "Taormina TV Cabinet",
      cost: 100,
      img: Item.Item19,
    },
    {
      id: "100",
      name: "£5 Amazon Gift Card",
      cost: 1265,
    },
    {
      id: "101",
      name: "£10 Amazon Gift Card",
      cost: 2530,
    },
    {
      id: "102",
      name: "£20 Amazon Gift Card",
      cost: 5060,
    },
    {
      id: "103",
      name: "Italy 5€ Amazon Gift Card",
      cost: 1265,
    },
    {
      id: "104",
      name: "Italy 10€ Amazon Gift Card",
      cost: 2530,
    },
    {
      id: "105",
      name: "Italy 20€ Amazon Gift Card",
      cost: 5060,
    },
  ];

  const [user, setUser] = useState<IAuthenticatedUser | null>(null);
  const [completedSurveys, setCompletedSurveys] = useState([]); // Example state for surveys
  const [usedItems, setUsedItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await authStore.getUser();
      setUser(userData);

      const surveys = await authStore.getUserSurveys(true); // Fetch completed surveys
      const items = await authStore.getUserUsedItems(); // Fetch used items
      setCompletedSurveys(surveys.slice(0, 3)); // Limiting to 3 items for dashboard display

      setLoading(false);
    };

    const fetchUsedItems = async () => {
      try {
        const usedItems = await authStore.getUserUsedItems();
        if (usedItems) {
          const usedData = items.filter((item) => usedItems.includes(item.id));
          setUsedItems(usedData.slice(0, 3));
        }
      } catch (err: any) {
        toast.error("There was an error getting your used items.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
    fetchUsedItems();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  const renderItems = (itemsList: any[]) => (
    <>
      {itemsList.length <= 0 ? (
        <EmptyState title="No Used Items" message="You haven't used any items yet." />
      ) : (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {itemsList.map((item) => (
            <Card
              key={item.id}
              rounded="xl"
              cardSize="sm"
              className="flex gap-4 border border-gray-light"
            >
              <>
                <LazyImage
                  src={item.img}
                  alt={item.name}
                  className="w-[120px] h-full rounded-xl object-cover"
                />
                <div className="flex flex-col gap-2">
                  <h5 className="text-[16px] font-semibold">{item.name}</h5>
                  <p className="text-gray-dark">Cost: {item.cost}</p>
                </div>
              </>
            </Card>
          ))}
        </div>)}
    </>
  );

  const renderSurveys = (surveysList: any[]) => (
    <>
      {surveysList.length <= 0 ? (
        <EmptyState title="No Completed Surveys" message="You haven't completed any surveys yet." />
      ) : (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {surveysList.map((survey, index) => (
            <Card
              key={survey.token}
              rounded="xl"
              cardSize="sm"
              className="flex flex-col gap-4 border border-gray-light"
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 items-start">
                  <div className="w-[32px] h-[32px] text-[13px] bg-extra-light text-primary font-bold border border-light rounded-full flex items-center justify-center">
                    {index + 1}.
                  </div>
                  <h5 className="text-[16px] font-semibold">{survey.name}</h5>
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
        </div>)}
    </>
  );

  return (
    <div className="w-screen h-full min-h-screen md:h-screen flex flex-col md:flex-row bg-extra-light gap-0 md:gap-6 relative">
      <Navigation active="dashboard" />

      <div className="flex flex-col flex-1 gap-4 md:ml-[240px] p-6">
        <div className="flex items-center gap-2">
          <h4 className="text-[24px] font-bold">
            Dashboard
          </h4>
        </div>

        <Card
          rounded="xxl"
          cardStyle="outline"
          cardSize="base"
          className="h-full overflow-auto"
        >
          <div className="mb-8">
            {/* Completed Surveys Section */}
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-[20px] font-semibold">Your Completed Surveys</h5>
              <Link to="/surveys" className="py-2 px-4 bg-primary text-white hover:bg-primary-dark rounded-full text-[14px]">
                View all
              </Link>
            </div>
            {loading ? <Loader /> : renderSurveys(completedSurveys)}
          </div>

          <div>
            {/* Used Items Section */}
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-[20px] font-semibold">Your Used Items</h5>
              <Link to="/items" className="py-2 px-4 bg-primary text-white hover:bg-primary-dark rounded-full text-[14px]">
                View all
              </Link>
            </div>
            {loading ? <Loader /> : renderItems(usedItems)}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;

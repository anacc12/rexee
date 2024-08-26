import React, { useEffect, useState } from "react";
import { authStore } from "../auth";
import { toast } from "react-toastify";
import Card from "../components/Card";
import Navigation from "../components/Navigation";
import EmptyState from "../components/EmptyState";
import Loader from "../components/Loader";

import Item from "../assets/img/items";
import LazyImage from "../components/LazyImage";

const UserItems = () => {
  const [purchased, setPurchased] = useState<any[]>([]);
  const [used, setUsed] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchPurchasedItems = async () => {
      try {
        const purchasedItems = await authStore.getUserPurchasedItems();
        if (purchasedItems) {
          const purchasedData = items.filter((item) =>
            purchasedItems.includes(item.id)
          );
          setPurchased(purchasedData);
        }
      } catch (err: any) {
        toast.error("There was an error getting your purchased items.");
      } finally {
        setLoading(false);
      }
    };

    const fetchUsedItems = async () => {
      try {
        const usedItems = await authStore.getUserUsedItems();
        if (usedItems) {
          const usedData = items.filter((item) => usedItems.includes(item.id));
          setUsed(usedData);
        }
      } catch (err: any) {
        toast.error("There was an error getting your used items.");
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    fetchPurchasedItems();
    fetchUsedItems();
  }, []);

  const renderItems = (itemsList: any[]) => (
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
    </div>
  );


  return (
    <div className="w-screen h-full min-h-screen md:h-screen flex flex-col md:flex-row bg-extra-light gap-0 md:gap-6 relative">
      <Navigation active="items" />

      <div className="flex flex-col flex-1 gap-4 md:ml-[240px] p-6">
        <div className="flex items-center gap-2">
          <h4 className="text-[24px] font-bold">Your Items</h4>
          <div className="flex items-center justify-center w-[24px] h-[24px] rounded-full !text-white bg-primary text-[13px] leading-[0px] font-medium">
            {items.length}
          </div>
        </div>

        <Card
          rounded="xxl"
          cardStyle="outline"
          cardSize="base"
          className="h-full overflow-auto"
        >

          {/* Navigation */}
          <ul
            className="inline-flex p-1 list-none rounded-full bg-extra-light mb-6"
            data-tabs="tabs"
            role="list"
          >
            <li className="flex-auto text-center">
              <a
                className={`flex items-center justify-center w-full px-12 py-2 text-[14px] mb-0 transition-all ease-in-out border-0 rounded-full cursor-pointer text-slate-700 bg-inherit ${
                  activeTab === "all"
                    ? "bg-white font-semibold"
                    : "font-medium"
                }`}
                onClick={() => setActiveTab("all")}
              >
                All Items
              </a>
            </li>
            <li className="flex-auto text-center">
              <a
                className={`flex items-center justify-center w-full px-12 py-2 text-[14px] mb-0 transition-all ease-in-out border-0 rounded-full cursor-pointer text-slate-700 bg-inherit ${
                  activeTab === "used"
                    ? "bg-white font-semibold"
                    : "font-medium"
                }`}
                onClick={() => setActiveTab("used")}
              >
                Used Items
              </a>
            </li>
            <li className="flex-auto text-center">
              <a
                className={`flex items-center justify-center w-full px-12 py-2 text-[14px] mb-0 transition-all ease-in-out border-0 rounded-full cursor-pointer text-slate-700 bg-inherit ${
                  activeTab === "purchased"
                    ? "bg-white font-semibold"
                    : "font-medium"
                }`}
                onClick={() => setActiveTab("purchased")}
              >
                Purchased Items
              </a>
            </li>
          </ul>

          {loading ? (
            <Loader />
          ) : (
            <>
              {activeTab === "all" &&
                (items.filter((item) => parseInt(item.id) < 100).length > 0
                  ? renderItems(
                      items.filter((item) => parseInt(item.id) < 100)
                    )
                  : <EmptyState title="Sorry!" message="Looks like you don't have any items available." />)}
              {activeTab === "used" &&
                (used.length > 0
                  ? renderItems(used)
                  : <EmptyState title="Sorry!" message="Looks like you haven't used any items yet." />)}
              {activeTab === "purchased" &&
                (purchased.length > 0
                  ? renderItems(purchased)
                  : <EmptyState title="Sorry!" message="Looks like you haven't purchased any items yet." />)}
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default UserItems;

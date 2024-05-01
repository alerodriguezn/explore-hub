import ActivityCard from "@/components/cards/ActivityCard";
import { Activity } from "@/lib/definitions";
import Image from "next/image";
import {
  getActivities,
  getPromo,
  getRecommendedActivities,
} from "@/lib/placeholder-data";
import { Stack } from "@mui/system";
import CampaignIcon from "@mui/icons-material/Campaign";
import PromoCard from "../../components/cards/PromoCard";
import SearchBar from "@/components/ui/SearchBar";

export default function HomePage() {
  const activities: Activity[] = getActivities();
  const recommendedActivities = getRecommendedActivities();
  const promo = getPromo();

  return (
    <div>
      <div className="flex justify-center m-10 mt-2">
        <SearchBar />
      </div>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-2 w-[85%] gap-8 ">
          <section>
            <h2 className="text-2xl font-bold mb-4">Visto Recientemente</h2>

            <Stack direction="column" spacing={2}>
              {activities.map((item, index) => (
                <ActivityCard activity={item} key={index} />
              ))}
            </Stack>
          </section>
          <section>
            <div className="flex gap-2 justify-between items-center">
              <h2 className="text-2xl font-bold">Actividades Recomendadas</h2>
              <span className="flex items-center gap-2 bg-primary text-white text-2xl rounded-lg p-2 font-bold">
                <CampaignIcon sx={{ fontSize: 30 }} />
                <p>Promociones</p>
              </span>
            </div>
            <div className="mt-4">
              <h2 className="font-semibold">Transporte Disponible en tu zona</h2>
              <div className="flex justify-center">
                <Stack direction="row" spacing={2}>
                  {recommendedActivities.map((item, index) => (
                    <Image
                      key={index}
                      src={item.img}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                  ))}
                </Stack>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="font-semibold mb-4">Principales Destinos </h2>
              {/* Align in the middle */}
              <div className="grid grid-cols-2 gap-y-4 w-full">
                {promo.map((item, index) => (
                  <PromoCard promo={item} key={index} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

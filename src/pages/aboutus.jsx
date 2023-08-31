import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function Aboutus() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/bg.webp')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                      <Avatar
                        src="/img/aboutus1.jpg"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />                      
                    </div>
                  </div>
                </div>                
              </div>
              
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                Deep Lata<br/>
                </Typography>                
                <div className="mb-2 flex items-center justify-center gap-2">                  
                  <Typography className="font-medium text-blue-gray-700">
                    Founder<br/>
                  </Typography>
                </div>                
              </div>
              <div></div>
              <div className="px-80"></div>
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-25 w-40">
                      <Avatar
                        src="/img/aboutus2.jpg"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />                      
                    </div>
                  </div>
                </div>                
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                Pooja Singh
                </Typography>                
                <div className="mb-2 flex items-center justify-center gap-2">                  
                  <Typography className="font-medium text-blue-gray-700">
                    Founder<br/>
                  </Typography>
                </div>                
              </div>
              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                    (SHDRF) is a voluntary Organization Working for the education, health,Art & Culture,Children,Education & Literacy, Health & Family Welfare,HIV/AIDS, Skill Development, Agriculture,Animal Husbandry, Dairying & Fisheries,Biotechnology,Civic Issues,Dalit Upliftment,Differently Abled,Disaster Management,Drinking Water,Aged/Elderly,Environment & Forests,Food Processing,Housing,Human Rights,Information & Communication Technology,Labour & Employment,Land Resources,Legal Awareness & Aid,Micro Finance
                    (SHGs),Micro Small & Medium Enterprises,Minority Issues,New & Renewable Energy,Nutrition,Panchayati Raj,Prisoner's Issues,Right to Information & Advocacy,Rural Development & Poverty Alleviation,Science & Technology,Scientific & Industrial Research,Sports,Tourism,Tribal Affairs,Urban Development & Poverty Alleviation,Vocational Training,Water Resources,Women's Development & Empowerment,Youth Affairs and women’s empowerment in the Underprivileged communities, especially with children and women.<br/><br/>
                    (SHDRF) was initiated with a view to evolving information and making linkage between the villagers and the government. We believed that knowledge would lead to awareness, which would further lead to  self-development,empowerment and action.                    
                    </Typography>
                    <Typography className="mb-8 font-normal text-blue-gray-500" >
                    <b>Reg No. : 017863 Darpan/Niti Ayog/CSR</b><br/>                    
                    <b>PAN No. : ABHCS6047E</b><br/>
                    <b>State : Jharkhand/Bihar</b><br/> 
                    <b>District: Deoghar</b><br/>                  
                    </Typography>
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                    Our Hand For Help foundation is a secular, non-political, non-governmental and non-profitable, registered charitable Society. Our activities include working for Run Free Education and providing hospitality, food, and clothing to the children who live below the poverty line and also for orphanages, and old age homes. We are also working actively for the elimination of child labor. 
                    This is only but a brief account of some of our activities. We are a group of people working with immense motivation towards a common social goal. Tour the site for a descriptive account of all our activities.<br/><br/>

                    Thanks<br/>
                    Regards<br/>
                    Our Hand For Help Foundation Team
                    </Typography>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Aboutus;

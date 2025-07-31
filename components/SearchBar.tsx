"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import Image from "next/image";
import {formUrlQuery, removeKeysFromUrlQuery} from "@jsmastery/utils";
const SearchBar = () => {
     const pathname = usePathname();
     const router = useRouter();

     const searchParams = useSearchParams();
     const query = searchParams.get('query') || '';
     const [searchQuery, setSearchQuery] = useState('');
     useEffect(()=>{
      const delayDebouncFn = setTimeout(()=>{
 if(searchQuery){
            const newUrl = formUrlQuery({
                params:searchParams.toString(),
                 key:"topic",
                 value:searchQuery,
            });
            router.push(newUrl,{scroll:false});
        }
        else{
            if(pathname ==='/companions'){
                const newUrl = removeKeysFromUrlQuery({
                    params: searchParams.toString(),
                    keysToRemove:['topic']
                });
                router.push(newUrl,{scroll:false});
            }
        }
      },500)
       
     },[searchQuery, router, searchParams, pathname]);
  return(
   <div className="relative border border-black rounded-lg items-center flex gap-2 py-1 h-fit p-2 outline-2 outline-grey">
    <Image src="/icons/search.svg" alt="Search" height={15} width={15}/>
    <input placeholder="Search companion..."
    className="outline-none"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    />
   </div>
  )
}

export default SearchBar
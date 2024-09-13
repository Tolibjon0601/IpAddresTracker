
const Card = ({data}) => {
  console.log(data);
  return (
    <div>
{data.as&&
<div className="w-4/5 rounded-lg absolute top-52 md:top-56 left-10 md:left-40 bg-white z-10 flex flex-col md:flex-row container gap-4 md:gap-10 p-4 md:p-8  " style={{zIndex:10000}}>
<div className="md:border-r-2 w-full border-slate-300 flex flex-col gap-2 items-center">
<p className="text-sm text-slate-400 font-semibold uppercase">IP Address</p>
<p className="md:text-2xl text-black font-bold">{data.ip}</p></div>
<div className="md:border-r-2 w-full border-slate-300 flex flex-col gap-2 items-center">
<p className="text-sm text-slate-400 font-semibold uppercase">Location</p>
<p className="md:text-2xl text-black font-bold">{data.location.region}</p>
</div>
<div className="md:border-r-2 w-full border-slate-300 flex flex-col gap-2 items-center">
<p className="text-sm text-slate-400 font-semibold uppercase">Timezone</p>
<p className="md:text-2xl text-black font-bold">{data.location.timezone}</p>
</div>
<div className="md:border-r-2 w-full border-slate-300 flex flex-col gap-2 items-center">
<p className="text-sm text-slate-400 font-semibold uppercase">ISP</p>
<p className="md:text-2xl text-black font-bold">{data.isp}</p>
 </div>

</div>
}
    </div>
  )
}

export default Card;

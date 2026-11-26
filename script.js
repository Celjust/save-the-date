const weddingDate = new Date("2027-09-03T15:00:00+02:00");
const ids = ["days","hours","minutes","seconds"];
function updateCountdown(){
  const diff = Math.max(0, weddingDate.getTime() - Date.now());
  const values = [
    Math.floor(diff / 86400000),
    Math.floor(diff / 3600000) % 24,
    Math.floor(diff / 60000) % 60,
    Math.floor(diff / 1000) % 60
  ];
  ids.forEach((id,i)=>document.getElementById(id).textContent=String(values[i]).padStart(2,"0"));
}
updateCountdown(); setInterval(updateCountdown,1000);

document.getElementById("calendarButton").addEventListener("click",()=>{
  const event = [
    "BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Celine und Justin//Save the Date//DE",
    "CALSCALE:GREGORIAN","BEGIN:VEVENT","UID:celine-justin-20270903@example.com",
    "DTSTAMP:"+new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")+"","DTSTART:20270903T130000Z","DTEND:20270903T220000Z",
    "SUMMARY:Hochzeit Céline & Justin","LOCATION:Q-Stall\\, Pulheim",
    "DESCRIPTION:Wir freuen uns auf euch! Die Einladung mit allen Details folgt.",
    "END:VEVENT","END:VCALENDAR"
  ].join("\r\n") + "\r\n";
  const blob = new Blob([event],{type:"text/calendar;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href=url; a.download="Celine-und-Justin-03-09-2027.ics"; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
});

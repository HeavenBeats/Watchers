using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model{
    public class Manufacturer{
        public int Id { get; set; }
        public string Name { get; set; }
        public string Origin { get; set; }          //country of origin
        public int FoundedIn { get; set; }          //year of founding
        public string Founder { get; set; }
        public double LastYearRevenue { get; set; }    //revenue from last year in millions (€)
        public double LastYearProfit { get; set; }     //profit from last year in millions (€)
        public string HomePage { get; set; }
        [JsonIgnore]
        public ICollection<Car> Cars { get; set; }
    }
}
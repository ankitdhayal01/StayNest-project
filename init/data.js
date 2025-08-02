const sampleListings = [
  {
    "title": "Bohemian Cottage",
    "description": "A peaceful retreat with nature all around.",
    image: 
    {
      filename:"listingimage",
      url:"https://plus.unsplash.com/prem,ium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=1567&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 1875,
    "location": "Manali, India",
    "country": "India"
  },
  {
    "title": "Luxury Penthouse",
    "description": "Spacious, well-lit and close to attractions.",
    image:
    {
      filename:"listingimage",
      url:"https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "price": 3290,
    "location": "Goa, India",
    "country": "India"
  },
  {
    "title": "Rustic Treehouse",
    "description": "Experience the rustic charm with modern comfort.",
     image:
    {
      filename:"listingimage",
    url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     },
      "price": 1450,
    "location": "Rishikesh, India",
    "country": "India"
  },
  {
    "title": "Beachside Villa",
    "description": "Steps away from the sea with stunning views.",
     image:
    {
      filename:"listingimage",
    url: "https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?q=80&w=1815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "price": 4210,
    "location": "Goa, India",
    "country": "India"
  },
  {
    "title": "Desert Retreat",
    "description": "Private and cozy, ideal for weekend getaways.",
     image:
    {
      filename:"listingimage",
    url: "https://images.unsplash.com/photo-1717356280846-eaef82389e30?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "price": 1795,
    "location": "Jodhpur, India",
    "country": "India"
  },
  {
    "title": "Mountain View Cabin",
    "description": "Luxury meets comfort in the lap of nature.",
     image:
    {
      filename:"listingimage",
    url: "https://plus.unsplash.com/premium_photo-1682377521724-ececd24a83b4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "price": 2735,
    "location": "Ooty, India",
    "country": "India"
  },
  {
    "title": "Lakeside Lodge",
    "description": "Ideal for remote work or digital detox.",
     image:
    {
      filename:"listingimage",
    url: "https://images.unsplash.com/photo-1562239409-b5c79828df9e?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "price": 2125,
    "location": "Udaipur, India",
    "country": "India"
  },
  {
    "title": "Modern Studio",
    "description": "Architect-designed interiors and city vibes.",
   image:
    {
      filename:"listingimage",
    url: "https://plus.unsplash.com/premium_photo-1687960117210-3d74f437f769?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
    
    },
    "price": 3670,
    "location": "Delhi, India",
    "country": "India"
  },
  {
    "title": "Charming Farmhouse",
    "description": "Rustic stay with organic meals available.",
     image:
    {
      filename:"listingimage",
    url: "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    },"price": 2340,
    "location": "Pondicherry, India",
    "country": "India"
  },
  {
    "title": "Cozy Bungalow",
    "description": "Soothing interiors and quiet neighborhood.",
     image:
    {
      filename:"listingimage",
    url: "https://images.unsplash.com/photo-1594479125841-ff7800c6afcc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    },
    "price": 1890,
    "location": "Munnar, India",
    "country": "India"
  },
  {
    "title": "Jungle Hideout",
    "description": "Escape to nature in this jungle hideout.",
     image:
    {
      filename:"listingimage",
    url: "https://images.unsplash.com/photo-1744448365250-9b6aa1a7e4a3?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "price": 1780,
    "location": "Wayanad, India",
    "country": "India"
  },
  {
    "title": "Artistic Flat",
    "description": "Filled with art, color, and personality.",
     image:
    {
      filename:"listingimage",
    url: "https://plus.unsplash.com/premium_photo-1687960116592-b7373fb65f12?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    
    },
    "price": 3100,
    "location": "Mumbai, India",
    "country": "India"
  },
  {
    "title": "Urban Loft",
    "description": "A stylish loft in the heart of the city.",
     image:
    {
      filename:"listingimage",
    url: "https://plus.unsplash.com/premium_photo-1686782502531-e001f8371d81?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    },
    "price": 2980,
    "location": "Bangalore, India",
    "country": "India"
  },
  {
    "title": "Tranquil Stay",
    "description": "Peace and privacy guaranteed.",
     image:
    {
      filename:"listingimage",
    url: "https://images.unsplash.com/photo-1639755303110-c0f54e444d6f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    },
    "price": 1995,
    "location": "Shillong, India",
    "country": "India"
  },
  {
    "title": "Wilderness Cabin",
    "description": "Stay off-grid and recharge.",
     image:
    {
      filename:"listingimage",
    url: "https://images.unsplash.com/photo-1688653802629-5360086bf632?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    },
    "price": 1450,
    "location": "Darjeeling, India",
    "country": "India"
  },
  {
    "title": "Himalayan Homestay",
    "description": "Enjoy fresh air and mountain views.",
     image:
    {
      filename:"listingimage",
    url: "https://images.unsplash.com/photo-1692736933760-8a8a9b8c1b6f?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    },
    "price": 2250,
    "location": "Manali, India",
    "country": "India"
  },
  {
    "title": "Colonial Charm",
    "description": "Step back in time with colonial elegance.",
     image:
    {
      filename:"listingimage",
    url: "https://images.unsplash.com/photo-1596178067639-5c6e68aea6dc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    },
    "price": 2650,
    "location": "Kolkata, India",
    "country": "India"
  },
  {
    "title": "Eco Dome",
    "description": "Sustainable and unique stay.",
     image:
    {
      filename:"listingimage",
    url: "https://images.unsplash.com/photo-1596178067639-5c6e68aea6dc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    },"price": 1880,
    "location": "Auroville, India",
    "country": "India"
  },
  {
    "title": "Riverside Retreat",
    "description": "Listen to flowing water all day long.",
     image:
    {
      filename:"listingimage",
    url: "https://images.unsplash.com/photo-1623298460174-371443cc45f0?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    },"price": 1570,
    "location": "Rishikesh, India",
    "country": "India"
  },
  {
    "title": "Minimalist Den",
    "description": "Simple, sleek, and calming.",
     image:
    {
      filename:"listingimage",
    url: "https://images.unsplash.com/photo-1623298371642-416fcc1286d0?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },"price": 1980,
    "location": "Bangalore, India",
    "country": "India"
  },
  {
    "title": "Backwater Boathouse",
    "description": "Live on water in comfort.",
     image:
    {
      filename:"listingimage",
    url: "https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    },"price": 2675,
    "location": "Alleppey, India",
    "country": "India"
  },
  {
    "title": "Panoramic Suite",
    "description": "Wide windows and stunning views.",
     image:
    {
      filename:"listingimage",
    url: "https://images.unsplash.com/photo-1631752674874-9994662712af?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    },"price": 3100,
    "location": "Shimla, India",
    "country": "India"
  },
  {
    "title": "Countryside Haven",
    "description": "Perfect for escaping city life.",
     image:
    {
      filename:"listingimage",
    url: "https://images.unsplash.com/photo-1665758564776-f2aa6b41327e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    },"price": 2120,
    "location": "Coorg, India",
    "country": "India"
  },
  {
    "title": "Luxury Tent",
    "description": "Glam camping under the stars.",
     image:
    {
      filename:"listingimage",
    url: "https://images.unsplash.com/photo-1545039986-c631605fb605?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    
    },"price": 3200,
    "location": "Jaisalmer, India",
    "country": "India"
  },
  {
    "title": "Vintage Villa",
    "description": "Antique furniture and timeless charm.",
     image:
    {
      filename:"listingimage",
    url: "https://images.unsplash.com/photo-1612572860155-f0b661036344?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    },"price": 2875,
    "location": "Jaipur, India",
    "country": "India"
  },
  {
    "title": "Forest Cabin",
    "description": "Among the trees and birds.",
     image:
    {
      filename:"listingimage",
    url: "https://images.unsplash.com/photo-1633109956509-5303bda0cd7c?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "price": 1930,
    "location": "Sikkim, India",
    "country": "India"
  },
  {
    "title": "Cliffside Cottage",
    "description": "Perched above the valley.",
     image:
    {
      filename:"listingimage",
    url: "https://images.unsplash.com/photo-1633109741715-59b57495bbdc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    },"price": 2980,
    "location": "Munnar, India",
    "country": "India"
  },
  {
    "title": "Skyline View Room",
    "description": "City lights from your window.",
     image:
    {
      filename:"listingimage",
    url: "https://plus.unsplash.com/premium_photo-1678286771082-4de8d1e4b649?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    },"price": 3340,
    "location": "Mumbai, India",
    "country": "India"
  },
  {
    "title": "Beach Hut",
    "description": "Sandy toes and salty air.",
     image:
    {
      filename:"listingimage",
    url: "https://plus.unsplash.com/premium_photo-1678286771657-cf22aa97faf0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
    },"price": 2100,
    "location": "Goa, India",
    "country": "India"
  },
  {
    "title": "Garden Paradise",
    "description": "Surrounded by flowers and chirping birds.",
     image:
    {
      filename:"listingimage",
    url: "https://images.unsplash.com/photo-1682502524896-6d78b9e8413a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
    },"price": 2425,
    "location": "Mysore, India",
    "country": "India"
  },
  {
    "title": "Snowy Peaks Lodge",
    "description": "Ideal for winter getaways and snow activities.",
     image:
    {
      filename:"listingimage",
    url: "https://images.unsplash.com/photo-1670589953882-b94c9cb380f5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
    },"price": 3220,
    "location": "Gulmarg, India",
    "country": "India"
  },
  {
    "title": "Cultural Courtyard",
    "description": "Traditional living with a modern twist.",
     image:
    {
      filename:"listingimage",
    url: "https://plus.unsplash.com/premium_photo-1686782502855-46f64e5b8a94?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },"price": 2100,
    "location": "Bikaner, India",
    "country": "India"
  },
  {
    "title": "Riverbank Home",
    "description": "Peaceful spot by the riverside.",
     image:
    {
      filename:"listingimage",
    url: "https://plus.unsplash.com/premium_photo-1686782503408-05010b50f5e7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    
    },"price": 1870,
    "location": "Nashik, India",
    "country": "India"
  },
  {
    "title": "Tree Canopy House",
    "description": "Nestled high above in the trees.",
     image:
    {
      filename:"listingimage",
    url: "https://plus.unsplash.com/premium_photo-1686782502813-51579b55f6d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8",
    
    },"price": 2400,
    "location": "Sundarbans, India",
    "country": "India"
  },
 



];
module.exports={data:sampleListings}; 


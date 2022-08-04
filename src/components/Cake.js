import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";


function Cake() {
    const cakes = [
      {
        name: "Butter Cake",
        image:
          "https://assets.epicurious.com/photos/575991f3973781fc02c2a827/6:4/w_1600,c_limit/EP_06062016_Vanilla-Buttermilk-Wedding-Cake-with-Raspberries-and-Orange-Cream-Cheese-Frosting.jpg",
      },
      {
        name: "Pound Cake",
        image:
          "https://assets.epicurious.com/photos/57c6f789082060f11022b586/6:4/w_1600,c_limit/no-recipe-required-pound-cake-lemon-poppy-seed-30082016.jpg",
      },
      {
        name: "Sponge Cake",
        image:
          "https://assets.epicurious.com/photos/56f301595380ea2215f3b49c/6:4/w_1600,c_limit/1015-FS-CAKE01.jpg",
      },
      {
        name: "Genoise Cake",
        image:
          "https://assets.epicurious.com/photos/5af339265e455d485852fba6/6:4/w_1600,c_limit/EP_06012016_strawberry_shortcake_hero-slices.jpg",
      },
      {
        name: "Biscuit Cake",
        image:
          "https://assets.epicurious.com/photos/5af31a94fddd026b70f8c8e7/6:4/w_1600,c_limit/french-biscuit-cake-050918.jpg",
      },
      {
        name: "Angel Food Cake",
        image:
          "https://assets.epicurious.com/photos/5978a769ec2bc9393c374571/6:4/w_1600,c_limit/How-To-Make-Angel-Food-Cake-071220171869.jpg",
      },
      {
        name: "Chiffon Cake",
        image:
          "https://assets.epicurious.com/photos/5af4550baf6ece1dfcaf1a83/6:4/w_1600,c_limit/persian-love-cake-051018.jpg",
      },
      {
        name: "Baked Flourless Cake",
        image:
          "https://assets.epicurious.com/photos/56afe35a4154d00209141c97/6:4/w_1600,c_limit/EP_01272016_-3ingredientflourlesschocolatecake.jpg",
      },
      {
        name: "Unbaked Flourless Cake",
        image:
          "https://assets.epicurious.com/photos/60b7d0d16cd3418368fee29f/6:4/w_1600,c_limit/blueberry-lemon-icebox-cake-BA-070616.jpg",
      },
      {
        name: "Carrot Cake",
        image:
          "https://assets.epicurious.com/photos/58c978741406b443e2a1375c/6:4/w_1600,c_limit/Classic-Coconut-Carrot-Cake-hero-09032017.jpg",
      },
      {
        name: "Red Velvet Cake",
        image:
          "https://assets.epicurious.com/photos/56bcc39c2388d8216df80735/6:4/w_1600,c_limit/shutterstock_365627156.jpg",
      },
    ];
  return (
    <>
      <Typography variant="h4" mt={4} mb={4}>
        Cakes Varieties
      </Typography>
      <Stack mb={4} direction="row" justifyContent="space-evenly" sx={{flexWrap:"wrap"}}>
      {
        cakes.map(cake=>{
            return (
              <Card sx={{ maxWidth: 345, marginBottom: "20px" }}>
                <CardMedia
                  style={{ width: "100%", height: "140"}}
                  component="img"
                  image={cake.image}
                  alt="Cake-1"
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom component="div">
                    {cake.name}
                  </Typography>
                </CardContent>
              </Card>
            );
        })
      }
       

      </Stack>
    </>
  );
}

export default Cake
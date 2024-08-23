import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { styled } from "@mui/system";
import { FoodCategories } from "../../components/FoodCategories";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";

const ContentArea = styled(Box)({
  backgroundColor: "#ffffff",
  padding: "20px",
  overflowY: "auto", // Enable vertical scrolling
  overflowX: "hidden", // Disable horizontal scrolling
  height: "100vh", // Full viewport height to allow scrolling
  boxSizing: "border-box", // Ensure padding doesn't affect height
});

export const Home: FC = () => {
  const restaurantData = [
    {
      name: "McDonald's",
      image:
        "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto,width=800,quality=50/https://doordash-static.s3.amazonaws.com/media/photos/98a6f342-aa36-453e-ab97-33e377f52cfb-retina-large-png", // Replace with actual image URLs
      rating: 4.2,
      reviews: "8k+",
      distance: "5.3 mi",
      time: "33 min",
      deliveryFee: "$4.99 delivery fee",
      promo: "Free item on orders $15+",
    },
    // ... more data
  ];

  return (
    <ContentArea>
      <FoodCategories />
      <Grid container spacing={2}>
        {restaurantData.map((restaurant, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={restaurant.image}
                alt={restaurant.name}
              />
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">{restaurant.name}</Typography>
                  <FavoriteBorderIcon />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "5px",
                    color: "gray",
                  }}
                >
                  <StarIcon sx={{ color: "gold", fontSize: "1rem" }} />
                  <Typography variant="body2" sx={{ marginLeft: "5px" }}>
                    {restaurant.rating} ({restaurant.reviews}) •{" "}
                    {restaurant.distance} • {restaurant.time}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ marginTop: "5px" }}>
                  {restaurant.deliveryFee}
                </Typography>
                {restaurant.promo && (
                  <Button
                    variant="outlined"
                    sx={{
                      marginTop: "10px",
                      color: "red",
                      borderColor: "red",
                      textTransform: "none",
                    }}
                    size="small"
                  >
                    {restaurant.promo}
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ContentArea>
  );
};

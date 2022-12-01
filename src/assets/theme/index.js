export const theme = {
  color: {
    primaryColor: "#FF385C",
    secondaryColor: "#00848A",
  },
  textColor: {
    primaryColor: "#222",
    secondaryColor: "#484848",
  },
  mixins: {
    boxShadow: `
      transition: box-shadow 200ms ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
      }
    `,
  },
};

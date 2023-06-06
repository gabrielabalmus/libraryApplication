export const RaportOptions = (year: string) => ({
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: `Loans raport for ${year}`,
    },
  },
});

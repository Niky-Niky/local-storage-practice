const settings = {
    theme: 'dark',
    isAuthenticated: true,
    options: [1, 2, 3],
  };
  
  const setTheme = localStorage.setItem('theme', JSON.stringify(settings.theme));
  const getTheme = localStorage.getItem('theme', JSON.stringify(settings.theme));
  const parcedTheme = JSON.parse(getTheme);
  console.log(parcedTheme);

//   const date = new Date
//   console.log(date)


















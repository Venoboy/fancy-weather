const getIP = async () => {
  let ip;
  try {
    const promiseIP4 = await fetch('https://api.ipify.org?format=json');
    ip = promiseIP4.json();
  } catch (e) {
    const promiseIP6 = await fetch('https://api6.ipify.org?format=json');
    ip = promiseIP6.json();
  }
  return ip;
};

export default getIP();

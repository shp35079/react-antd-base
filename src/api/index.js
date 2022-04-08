import faker from '@faker-js/faker';

function makeDummyData(count) {
  const dummyData = [];
  for (let i = 1; i <= count; i++) {
    const firstName = faker.name.firstName();
    dummyData.push({
        id: i,
        name: firstName,
        email: faker.internet.email(firstName),
        company: faker.company.companyName(),
        title: faker.name.title(),
    });
  }
  return dummyData;
}


const DUMMY_COUNT = 20;
const dummyData = makeDummyData(DUMMY_COUNT);
const TIMEOUT = 300;

// API
// dummyData 하나를 호출합니다.
export function fetchById(targetId) {
  return toAsyncAPI(() => dummyData.find(({ id }) => id === targetId));
}

// dummyData 전체를 호출합니다.
export async function fetchList() {
  return toAsyncAPI(() => dummyData);
}

// dummyData 하나를 생성하고 배열 맨 아래에 추가합니다.
export async function create(data) {
  const id = dummyData[dummyData.length-1].id + 1;
  dummyData.push({ id, ...data});
  return fetchById(id);
}

// dummyData 하나를 업데이트 합니다.
export async function update(data) {
  return toAsyncAPI(() => {
    const index = dummyData.findIndex(({ id }) => id === data.id);
    dummyData[index] = data;  
    return dummyData[index];
  });
}

// dummyData 하나를 삭제합니다.
export async function deleteById(targetId) {
  return toAsyncAPI(() => {
    const index = dummyData.findIndex(({ id }) => id === targetId);
    dummyData.splice(index, 1);
    return targetId;
  });
}

// async helper
function toAsyncAPI(action) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(action());
    }, TIMEOUT)
  }); 
}
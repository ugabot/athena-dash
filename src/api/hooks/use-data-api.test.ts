// import { renderHook } from "@testing-library/react-hooks";
import { renderHook } from "@testing-library/react";
import fetchMock from "fetch-mock";
import { useDataApi } from "./use-data-api";
import { act } from "react-test-renderer";

const stubbedUsers = [
  { full_name: "Peter Pan", age: "50", income: 10_000 },
  { full_name: "Mickey Mouse", age: "60", income: 20_000 },
];
const stubbedFetchUrl = "test-api.com/userUrl-mock";

beforeAll(() => {
  // jest.spyOn(global, 'fetch')
  global.fetch = fetch;
});
afterAll(() => {
  fetchMock.restore();
});

describe("useApiData", () => {
  it("should return data with a successful request", async () => {
    const { result } = renderHook(() => useDataApi());
    fetchMock.mock(stubbedFetchUrl, {
      returnedData: stubbedUsers,
    });
    await act(async () => {
      result.current.callApi(stubbedFetchUrl);
    });

    expect(result.current.data).toStrictEqual({
      returnedData: stubbedUsers,
    });
    expect(result.current.loading).toBeFalsy();
  });

  it("should return error as true if api error", async () => {
    const { result } = renderHook(() => useDataApi());

    fetchMock.mock("test-fail.com", 500);

    await act(async () => {
      result.current.callApi("test-fail.com");
    });

    expect(result.current.data).toBe(undefined);
    expect(result.current.error).toBe(true);
    expect(result.current.errorMsg).toBeDefined();
    expect(result.current.loading).toBeFalsy();
  });

  it("should not fetch data if current reference is falsy", async () => {
    global.fetch = jest.fn(async () =>
      Promise.resolve({ json: async () => Promise.resolve({ id: 0 }) })
    ) as jest.Mock;

    const { result } = renderHook(() => useDataApi());
    expect(global.fetch).not.toHaveBeenCalled();
    expect(result.current).toEqual(
      expect.objectContaining({
        loading: true,
        data: undefined,
        error: false,
        errorMsg: undefined,
      })
    );
  });
});

import { test, expect } from "@playwright/test";

test("Le compteur devrait être à 0 au démarrage", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await expect(page.getByRole("button", { name: "count is" })).toBeVisible();
  await expect(page.getByRole("button")).toContainText("count is 0");
});

test("Le compteur devrait être à 2 après deux clics sur le bouton +", async ({
  page,
}) => {
  await page.goto("http://localhost:5173");
  await page.click("#increment", { clickCount: 2 });
  const counterValue = await page.textContent("#counter");
  expect(counterValue).toBe("2");
});

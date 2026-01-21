import { test, expect } from '@playwright/test';

test.describe('Critical User Journey (Mocked)', () => {

    test('User can navigate to Workflow Builder and add a node', async ({ page }) => {
        // 1. Mock Network API (Contract Test for Backend)
        // We mock the save endpoint to ensure test stability and speed
        await page.route('/api/workflow/save', async route => {
            const json = { status: 'success', id: 'wf_123' };
            await route.fulfill({ json });
        });

        // 2. Bypass Auth (Inject LocalStorage)
        await page.addInitScript(() => {
            window.localStorage.setItem('elysian-auth-storage', JSON.stringify({
                state: {
                    isAuthenticated: true,
                    user: { id: 'test-user', name: 'Tester', email: 'test@elysian.com' }
                },
                version: 0
            }));
        });

        // 3. Visit App
        await page.goto('/');

        // 4. Navigate to Workflow Builder
        await page.goto('/workflow');

        // Check if Builder loaded (Sidebar title is "Components")
        await expect(page.locator('text=Components')).toBeVisible();

        // 5. Interaction: Add LLM Node
        // Mobile/Desktop might differ, so we force desktop viewport in config or here
        await page.setViewportSize({ width: 1280, height: 720 });

        // In Sidebar.tsx, items are divs with text "Reasoning Engine", not buttons
        await page.getByText('Reasoning Engine').first().click();

        // 6. Verify Node Added to Canvas
        // Canvas nodes usually have a class or data-testid. 
        // ReactFlow nodes have class "react-flow__node"
        await expect(page.locator('.react-flow__node')).toHaveCount(1);

        // 7. Save Workflow
        // Trigger save (mocked)
        // await page.getByRole('button', { name: /Save/i }).click();
        // await expect(page.locator('text=Saved successfully')).toBeVisible(); 
    });
});

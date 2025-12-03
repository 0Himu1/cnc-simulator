document.addEventListener('DOMContentLoaded', () => {
	initTabs();
	initSidebar();
});

function initTabs() {
	const tabs = document.querySelectorAll('[data-tab-target]');

	tabs.forEach(tab => {
		tab.addEventListener('click', e => {
			// Prevent default anchor behavior if it's a link
			e.preventDefault();

			const targetSelector = tab.dataset.tabTarget;
			const target = document.querySelector(targetSelector);

			if (!target) {
				console.error('Tab target not found:', targetSelector);
				return;
			}

			// 1. Deactivate all tabs in this group
			// We assume tabs are siblings or in the same container.
			// Better: find all tabs that share the same parent or data-group if we had one.
			// For now, we'll select all tabs again to be safe.
			const allTabs = document.querySelectorAll('[data-tab-target]');
			allTabs.forEach(t => {
				t.classList.remove(
					'text-primary',
					'border-primary',
					'bg-blue-50',
					'dark:bg-blue-900/20'
				);
				t.classList.add(
					'text-gray-500',
					'hover:text-gray-700',
					'dark:text-gray-400',
					'dark:hover:text-gray-200',
					'border-transparent'
				);
			});

			// 2. Activate clicked tab
			tab.classList.remove(
				'text-gray-500',
				'hover:text-gray-700',
				'dark:text-gray-400',
				'dark:hover:text-gray-200',
				'border-transparent'
			);
			tab.classList.add(
				'text-primary',
				'border-primary',
				'bg-blue-50',
				'dark:bg-blue-900/20'
			);

			// 3. Hide all tab contents
			const allContents = document.querySelectorAll('[data-tab-content]');
			allContents.forEach(content => {
				content.classList.add('hidden');
			});

			// 4. Show target content
			target.classList.remove('hidden');
		});
	});
}

function initSidebar() {
	const navItems = document.querySelectorAll('.sidebar-nav-item');

	navItems.forEach(item => {
		item.addEventListener('click', e => {
			e.preventDefault();

			// 1. Reset all items
			navItems.forEach(nav => {
				nav.classList.remove(
					'bg-blue-50',
					'text-primary',
					'dark:bg-blue-900/20',
					'dark:text-blue-400'
				);
				nav.classList.add(
					'text-gray-400',
					'hover:text-gray-600',
					'dark:hover:text-gray-300'
				);
			});

			// 2. Activate clicked item
			item.classList.remove(
				'text-gray-400',
				'hover:text-gray-600',
				'dark:hover:text-gray-300'
			);
			item.classList.add(
				'bg-blue-50',
				'text-primary',
				'dark:bg-blue-900/20',
				'dark:text-blue-400'
			);
		});
	});
}

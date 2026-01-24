document.addEventListener("DOMContentLoaded", () => {
    let additionalIndex = 1;

    const addButtonAdditional = document.querySelector(".addanother_service");
    const containerAdditional = document.querySelector(".additional_charges");

    if (!addButtonAdditional || !containerAdditional) return;

    addButtonAdditional.addEventListener("click", () => {
        additionalIndex++;

        const row = document.createElement("div");
        row.className = "grid grid-cols-2 gap-2 mt-2";

        row.innerHTML = `
            <input type="text"
                id="additional_${additionalIndex}"
                name="additional_${additionalIndex}"
                placeholder="e.g. Lift Maintenance, WatchMan Fees, etc."
                class="w-full px-2 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700
                       bg-white dark:bg-transparent text-center
                       text-zinc-900 dark:text-zinc-100
                       focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <input type="number"
                id="additional_total_${additionalIndex}"
                name="additional_total_${additionalIndex}"
                value="0"
                min="0"
                class="w-full px-2 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700
                       bg-white dark:bg-transparent text-center
                       text-zinc-900 dark:text-zinc-100
                       focus:outline-none focus:ring-2 focus:ring-blue-500" />
        `;

        containerAdditional.appendChild(row);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let RentIndex = 1;

    const addButtonRent = document.querySelector(".addanother_rent");
    const containerRent = document.querySelector(".rent_charges");

    if (!addButtonRent || !containerRent) return;

    addButtonRent.addEventListener("click", () => {
        RentIndex++;

        const row = document.createElement("div");
        row.className = "grid grid-cols-2 gap-2 mt-2";

        row.innerHTML = `
            <input type="text"
                id="rent_${RentIndex}"
                name="rent_${RentIndex}"
                placeholder="e.g. Flat 3A"
                class="w-full px-2 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700
                       bg-white dark:bg-transparent text-center
                       text-zinc-900 dark:text-zinc-100
                       focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <input type="number"
                id="rent_total_${RentIndex}"
                name="rent_total_${RentIndex}"
                value="0"
                min="0"
                class="w-full px-2 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700
                       bg-white dark:bg-transparent text-center
                       text-zinc-900 dark:text-zinc-100
                       focus:outline-none focus:ring-2 focus:ring-blue-500" />
        `;

        containerRent.appendChild(row);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let UtilityIndex = 2;

    const addButtonUtility = document.querySelector(".addanother_utility");
    const containerUtility = document.querySelector(".utility_charges");

    if (!addButtonUtility || !containerUtility) return;

    addButtonUtility.addEventListener("click", () => {
        UtilityIndex++;

        const row = document.createElement("div");
        row.className = "grid grid-cols-4 gap-2 mt-2";

        row.innerHTML = `
            <input type="text"
                id="utility_${UtilityIndex}"
                name="utility_${UtilityIndex}"
                placeholder="e.g. Purified Water"
                class="w-full px-2 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700
                       bg-white dark:bg-transparent text-center
                       text-zinc-900 dark:text-zinc-100
                       focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <input type="number"
                id="utility_unit_${UtilityIndex}"
                name="utility_unit_${UtilityIndex}"
                value="0"
                min="0"
                class="w-full px-2 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700
                       bg-white dark:bg-transparent text-center
                       text-zinc-900 dark:text-zinc-100
                       focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <input type="number"
                id="utility_price_${UtilityIndex}"
                name="utility_price_${UtilityIndex}"
                value="0"
                min="0"
                class="w-full px-2 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700
                       bg-white dark:bg-transparent text-center
                       text-zinc-900 dark:text-zinc-100
                       focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <input type="number"
                id="utility_total_${UtilityIndex}"
                name="utility_total_${UtilityIndex}"
                value="0"
                min="0"
                class="w-full px-2 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700
                       bg-white dark:bg-transparent text-center
                       text-zinc-900 dark:text-zinc-100
                       focus:outline-none focus:ring-2 focus:ring-blue-500" />
        `;

        containerUtility.appendChild(row);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let FixedUtilityIndex = 4;

    const addButtonUtilityFixed = document.querySelector(".addanother_fixedutility");
    const containerUtilityFixed = document.querySelector(".fixedutility_charges");

    if (!addButtonUtilityFixed || !containerUtilityFixed) return;

    addButtonUtilityFixed.addEventListener("click", () => {
        FixedUtilityIndex++;

        const row = document.createElement("div");
        row.className = "grid grid-cols-4 gap-2 mt-2";

        row.innerHTML = `
            <input type="text"
                id="fixedutility_${FixedUtilityIndex}"
                name="fixedutility_${FixedUtilityIndex}"
                placeholder="e.g. Purified Water"
                class="w-full px-2 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700
                       bg-white dark:bg-transparent text-center
                       text-zinc-900 dark:text-zinc-100
                       focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <input type="number"
                id="fixedutility_ns_${FixedUtilityIndex}"
                name="fixedutility_ns_${FixedUtilityIndex}"
                value="0"
                min="0"
                class="w-full px-2 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700
                       bg-white dark:bg-transparent text-center
                       text-zinc-900 dark:text-zinc-100
                       focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <input type="number"
                id="fixedutility_price_${FixedUtilityIndex}"
                name="fixedutility_price_${FixedUtilityIndex}"
                value="0"
                min="0"
                class="w-full px-2 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700
                       bg-white dark:bg-transparent text-center
                       text-zinc-900 dark:text-zinc-100
                       focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <input type="number"
                id="fixedutility_total_${FixedUtilityIndex}"
                name="fixedutility_total_${FixedUtilityIndex}"
                value="0"
                min="0"
                class="w-full px-2 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700
                       bg-white dark:bg-transparent text-center
                       text-zinc-900 dark:text-zinc-100
                       focus:outline-none focus:ring-2 focus:ring-blue-500" />
        `;

        containerUtilityFixed.appendChild(row);
    });
});
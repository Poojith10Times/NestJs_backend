import { CategoryDateDto } from "src/elastic-search/dto/category-date.dto";


export async function queryBuilder(fields: CategoryDateDto) {
    const { category, endDate_gte, endDate_lte, event_id, startDate_gte, startDate_lte } = fields;

    const must: any[] = [];

    if (category) { // filter by category
        must.push({ match: { event_categoryName: category } });
    }

    if (startDate_gte || startDate_lte) { // filter by date range
        const range: any = {};
        if (startDate_gte) range.gte = startDate_gte;
        if (startDate_lte) range.lte = startDate_lte;
        must.push({ range: { event_startDate: range } });
    }

    console.log(startDate_gte, startDate_lte);

    if (endDate_gte || endDate_lte) { // filter by date range
        const range: any = {};
        if (endDate_gte) range.gte = endDate_gte;
        if (endDate_lte) range.lte = endDate_lte;
        must.push({ range: { event_endDate: range } });
    }

    if (event_id) {
        must.push({ match: { event_id: event_id } });
    }

    console.log(must);

    return must;
}
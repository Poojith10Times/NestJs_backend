import { CategoryDateDto } from "src/elastic-search/dto/category-date.dto";


export async function queryBuilder(fields: CategoryDateDto) {
    const { category, endDate_gte, endDate_lte, createdAt_gte, createdAt_lte, event_id, impactScore_gte, impactScore_lte, event_status, event_type, event_frequency } = fields;

    const must: any[] = [];

    if (category) { // filter by category
        must.push({ match: { event_categoryName: category } });
    }

    if (endDate_gte || endDate_lte) { // filter by date range
        const range: any = {};
        if (endDate_gte) range.gte = endDate_gte;
        if (endDate_lte) range.lte = endDate_lte;
        must.push({ range: { event_endDate: range } });
    }

    if (createdAt_gte || createdAt_lte) { // filter by created date range
        const range: any = {};
        if (createdAt_gte) range.gte = createdAt_gte;
        if (createdAt_lte) range.lte = createdAt_lte;
        must.push({ range: { event_created: range } });
    }

    if (event_id) {
        must.push({ match: { event_id: event_id } });
    }

    if (impactScore_gte || impactScore_lte) { // filter by impact score range
        const range: any = {};
        if (impactScore_gte) range.gte = impactScore_gte;
        if (impactScore_lte) range.lte = impactScore_lte;
        must.push({ range: { event_impactScore: range } });
    }

    if(event_status) {
        must.push({ match: { event_status: event_status } });
    }

    if(event_type) {
        must.push({ match: { event_type: event_type } });
    }

    if(event_frequency) {
        must.push({ match: { event_frequency: event_frequency } });
    }

    return must;
}
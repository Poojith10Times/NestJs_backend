import { CategoryDateDto } from "src/elastic-search/dto/category-date.dto";


export async function queryBuilder(fields: CategoryDateDto) {
    const { category, endDate_gte, endDate_lte, createdAt_gte, createdAt_lte, event_id, designation, impactScore_gte, impactScore_lte, event_status, event_type, event_frequency, startDate_gte, startDate_lte, entry_type, inboundScore_gte, inboundScore_lte, internationalScore_gte, internationalScore_lte, editions_gte, editions_lte } = fields;

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

    if (designation) {
        must.push({ match: { user_designationName: designation } });
    }

    if (impactScore_gte || impactScore_lte) { // filter by impact score range
        const range: any = {};
        if (impactScore_gte) range.gte = impactScore_gte;
        if (impactScore_lte) range.lte = impactScore_lte;
        must.push({ range: { event_impactScore: range } });
    }

    if (inboundScore_gte || inboundScore_lte) { // filter by inbound score range
        const range: any = {};
        if (inboundScore_gte) range.gte = inboundScore_gte;
        if (inboundScore_lte) range.lte = inboundScore_lte;
        must.push({ range: { event_inboundScore: range } });
    }

    if (internationalScore_gte || internationalScore_lte) { // filter by international score range
        const range: any = {};
        if (internationalScore_gte) range.gte = internationalScore_gte;
        if (internationalScore_lte) range.lte = internationalScore_lte;
        must.push({ range: { event_internationalScore: range } });
    }

    if (editions_gte || editions_lte) { // filter by editions range
        const range: any = {};
        if (editions_gte) range.gte = editions_gte;
        if (editions_lte) range.lte = editions_lte;
        must.push({ range: { event_editionsCount: range } });
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

    if(entry_type) {
        must.push({ match: { event_pricing: entry_type } });
    }

    return must;
}
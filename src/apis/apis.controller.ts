import { BadRequestException, Body, Controller, Get, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { ApisService } from './apis.service';
import { CreateApiDto, CreateFiltersDto, CreateUserApiAccessDto, CreateUserApiAccessSchema, CreateUserFilterAccessDto, GetApisQueryDto, GetApisQuerySchema, GetFiltersQueryDto, GetFiltersQuerySchema, GetUserFilterAccessQueryDto, GetUserFilterAccessQuerySchema, UpdateApiDto, UpdateFilterDto, UpdateUserApiAccessDto, UpdateUserFilterAccessDto } from './dto/api.dto';

@Controller('apis')
export class ApisController {
    constructor(private readonly apisService: ApisService) {}

    //get all apis
    @Get('all')
    async getAllApis(@Query() query: any) {
        let queryParams;
        try {
            queryParams = GetApisQuerySchema.parse(query);
        } catch (e) {
            throw new BadRequestException('Invalid query parameters: ' + e.message);
        }
        const response = await this.apisService.getAllApis(queryParams);
        return {success: true, response};
    }

    //create api
    @Post('create')
    async createApi(@Body() createApiDto: CreateApiDto) {
        const data = await this.apisService.createApi(createApiDto);
        return { success: true, data };
    }

    //get api by id
    @Get(':id')
    async findApiById(@Param('id', ParseUUIDPipe) id: string) {
        const data = await this.apisService.findApiById(id);
        return { success: true, data };
    }

    //update api
    @Put(':id')
    async updateApi(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateApiDto: UpdateApiDto,
    ) {
        const data = await this.apisService.updateApi(id, updateApiDto);
        return { success: true, data };
    }

    //get user api accesses
    @Get('user-accesses/:userId')
    async findUserApiAccesses(@Param('userId', ParseUUIDPipe) userId: string) {
        const data = await this.apisService.findUserApiAccesses(userId);
        return { success: true, data };
    }

    //create user api access
    @Post('user-api-access')
    async createAccess(@Body() rawBody: any) {
        let parsedBody;
        try {
        parsedBody = CreateUserApiAccessSchema.parse(rawBody);
        } catch (e) {
        throw new BadRequestException(e.errors);
        }
        const data = await this.apisService.createUserApiAccess(parsedBody);
        return { success: true, data };
    }

    //update user api access
    @Put('user-api-access/:userId/:apiId')
    async updateUserApiAccess(
        @Param('userId', ParseUUIDPipe) userId: string,
        @Param('apiId', ParseUUIDPipe) apiId: string,
        @Body() updateUserApiAccessDto: UpdateUserApiAccessDto,
    ) {
        const data = await this.apisService.updateUserApiAccess(
        userId,
        apiId,
        updateUserApiAccessDto,
        );
        return { success: true, data };
    }

    //get api filters
    @Get(':apiId/filters')
    async findApiFilters(
        @Param('apiId', ParseUUIDPipe) apiId: string,
        @Query() query: any,
    ) {
        const parsedQuery = GetFiltersQuerySchema.parse(query);
        const data = await this.apisService.findApiFilters(apiId, parsedQuery);
        return { success: true, data };
    }

    //create api filters
    @Post(':apiId/filters')
    async createApiFilters(
        @Param('apiId', ParseUUIDPipe) apiId: string,
        @Body() createFiltersDto: CreateFiltersDto,
    ) {
        const data = await this.apisService.createApiFilters(
        apiId,
        createFiltersDto,
        );
        return { success: true, ...data };
    }

    //update filter
    @Put(':filterId/filters')
    async updateFilter(
        @Param('filterId', ParseUUIDPipe) filterId: string,
        @Body() updateFilterDto: UpdateFilterDto,
    ) {
        const data = await this.apisService.updateFilter(
        filterId,
        updateFilterDto,
        );
        return { success: true, data };
    }

    //get user filter accesses
    @Get('filter-access/:userId')
    async findUserFilterAccesses(
        @Param('userId', ParseUUIDPipe) userId: string,
        @Query() query: any,
    ) {
        const parsedQuery = GetUserFilterAccessQuerySchema.parse(query);
        const data = await this.apisService.findUserFilterAccesses(
        userId,
        parsedQuery,
        );
        return { success: true, data };
    }

    //create user filter access
    @Post('user-filter-access')
    async createUserFilterAccess(
        @Body() createUserFilterAccessDto: CreateUserFilterAccessDto,
    ) {
        const data = await this.apisService.createUserFilterAccess(
        createUserFilterAccessDto,
        );
        return { success: true, ...data };
    }

    //update user filter access
    @Put('user-filter-access/:userId/:filterId')
    async updateUserFilterAccess(
        @Param('userId', ParseUUIDPipe) userId: string,
        @Param('filterId', ParseUUIDPipe) filterId: string,
        @Body() updateUserFilterAccessDto: UpdateUserFilterAccessDto,
    ) {
        const data = await this.apisService.updateUserFilterAccess(
        userId,
        filterId,
        updateUserFilterAccessDto,
        );
        return { success: true, data };
    }
}

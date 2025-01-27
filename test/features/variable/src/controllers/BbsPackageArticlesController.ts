import { Controller } from "@nestjs/common";
import typia from "typia";
import { v4 } from "uuid";

import core from "@nestia/core";

import { IBbsArticle } from "@api/lib/structures/IBbsArticle";
import { IPage } from "@api/lib/structures/IPage";

@Controller("bbs/package/:section/articles")
export class BbsPackageArticlesController {
    /**
     * Paginate entire articles.
     *
     * @param section Section code
     * @param input Page request info
     * @returns Paginated articles with summarized info
     */
    @core.TypedRoute.Patch()
    public async index(
        @core.TypedParam("section") section: string | null,
        @core.TypedBody() input: IPage.IRequest,
    ): Promise<IPage<IBbsArticle.ISummary>> {
        section;
        input;
        return typia.random<IPage<IBbsArticle.ISummary>>();
    }

    /**
     * Paginate entire articles (query ver.).
     *
     * @param section Section code
     * @param input Page request info
     * @returns Paginated articles with summarized info
     */
    @core.TypedRoute.Get()
    public async catch(
        @core.TypedParam("section") section: string | null,
        @core.TypedQuery() input: IPage.IRequest,
    ): Promise<IPage<IBbsArticle.ISummary>> {
        section;
        input;
        return typia.random<IPage<IBbsArticle.ISummary>>();
    }

    /**
     * Read an article.
     *
     * @param section Section code
     * @param id Target article ID
     * @returns Detailed article info
     */
    @core.TypedRoute.Get(":id")
    public async at(
        @core.TypedParam("section") section: string,
        @core.TypedParam("id", "uuid") id: string | null,
    ): Promise<IBbsArticle> {
        return {
            ...typia.random<IBbsArticle>(),
            id: id ?? v4(),
            section,
        };
    }

    /**
     * Get new article of a day.
     * 
     * @param section Section code
     * @param date Target data
     * @returns The new article info
     */
    @core.TypedRoute.Get("new/:date")
    public async new(
        @core.TypedParam("section") section: string,
        @core.TypedParam("date", "date") date: string,
    ): Promise<IBbsArticle> {
        section;
        date;
        return typia.random<IBbsArticle>();
    }

    /**
     * Store a new article.
     *
     * @param section Section code
     * @param input Content to store
     * @returns Newly archived article
     */
    @core.TypedRoute.Post()
    public async store(
        @core.TypedParam("section") section: string,
        @core.TypedBody() input: IBbsArticle.IStore,
    ): Promise<IBbsArticle> {
        return {
            ...typia.random<IBbsArticle>(),
            section,
            ...input,
        };
    }

    /**
     * Update an article.
     *
     * @param section Section code
     * @param id Target article ID
     * @param input Content to update
     * @returns Updated content
     */
    @core.TypedRoute.Put(":id")
    public async update(
        @core.TypedParam("section") section: string,
        @core.TypedParam("id", "uuid") id: string,
        @core.TypedBody() input: IBbsArticle.IStore,
    ): Promise<IBbsArticle> {
        return {
            ...typia.random<IBbsArticle>(),
            id,
            section,
            ...input,
        };
    }

    /**
     * Delete an article.
     * 
     * @param section Section code
     * @param id Target article ID
     */
    @core.TypedRoute.Delete(":id")
    public async delete(
        @core.TypedParam("section") section: string,
        @core.TypedParam("id", "uuid") id: string,
    ): Promise<void> {
        section;
        id;
    }

    /**
     * Remove every articles in a section.
     * 
     * @param section Section code
     * @internal
     */
    @core.TypedRoute.Delete()
    public async $delete(
        @core.TypedParam("section") section: string,
    ): Promise<void> {
        section;
    }
}

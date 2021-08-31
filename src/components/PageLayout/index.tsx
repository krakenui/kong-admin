import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface PageMetaTag {
    name: string;
    content: string;
}

export interface PageLayoutProps extends React.ComponentProps<any> {
    title?: string;
    metaTags?: PageMetaTag[];
    activeBreadcrumbs?: boolean;
    activePageMeta?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({
    title,
    metaTags,
    activeBreadcrumbs,
    activePageMeta,
    children,
}) => {
    if (activeBreadcrumbs == null) {
        activeBreadcrumbs = true;
    }
    if (activePageMeta == null) {
        activePageMeta = true;
    }

    return (
        <div className="app-page-layout">
            {activePageMeta && (
                <Helmet>
                    {title != null && (
                        <title>React Admin Dashboard | {title}</title>
                    )}

                    {metaTags != null &&
                        metaTags.map((tag, idx) => (
                            <meta
                                name={tag.name}
                                content={tag.content}
                                key={idx}
                            />
                        ))}
                </Helmet>
            )}

            <div className="kdr-page-container">{children}</div>
        </div>
    );
};

export default PageLayout;

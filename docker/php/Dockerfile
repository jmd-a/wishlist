FROM php:8.4-fpm-alpine

COPY --from=mlocati/php-extension-installer:2 /usr/bin/install-php-extensions /usr/local/bin/
COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer

RUN apk add --no-cache git unzip \
    && install-php-extensions \
        pdo_pgsql \
        intl \
        opcache \
        zip \
        apcu \
        redis \
        amqp \
        xdebug

COPY conf.d/app.ini /usr/local/etc/php/conf.d/zz-app.ini

ENV COMPOSER_ALLOW_SUPERUSER=1 \
    XDEBUG_MODE=off

WORKDIR /var/www/app

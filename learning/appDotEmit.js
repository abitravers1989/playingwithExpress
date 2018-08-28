function emit(type) {
    var er, handler, len, args, i, events, domain;
    var needDomainExit = false;
    var doError = (type === 'error');

    events = this._events;
    if (events)
        doError = (doError && events.error == null);
    else if (!doError)
        return false;

    domain = this.domain;

    // If there is no 'error' event listener then throw.
    if (doError) {
        if (arguments.length > 1)
            er = arguments[1];
        if (domain) {
            if (!er)
                er = new Error('Unhandled "error" event');
            if (typeof er === 'object' && er !== null) {
                er.domainEmitter = this;
                er.domain = domain;
                er.domainThrown = false;
            }
            domain.emit('error', er);
        } else if (er instanceof Error) {
            throw er; // Unhandled 'error' event
        } else {
            // At least give some kind of context to the user
            const err = new Error('Unhandled "error" event. (' + er + ')');
            err.context = er;
            throw err;
        }
        return false;
    }

    handler = events[type];

    if (!handler)
        return false;

    if (domain && this !== process) {
        domain.enter();
        needDomainExit = true;
    }

    var isFn = typeof handler === 'function';
    len = arguments.length;
    switch (len) {
        // fast cases
        case 1:
            emitNone(handler, isFn, this);
            break;
        case 2:
            emitOne(handler, isFn, this, arguments[1]);
            break;
        case 3:
            emitTwo(handler, isFn, this, arguments[1], arguments[2]);
            break;
        case 4:
            emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
            break;
        // slower
        default:
            args = new Array(len - 1);
            for (i = 1; i < len; i++)
                args[i - 1] = arguments[i];
            emitMany(handler, isFn, this, args);
    }

    if (needDomainExit)
        domain.exit();

    return true;
}